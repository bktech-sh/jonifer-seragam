import ImageKit from "@imagekit/nodejs";
import { fallbackProductCategories, getCategoryBySlug, isVideoUrl } from "@/data/catalog";

export type PortfolioProject = {
  name: string;
  images: string[];
};

export type PortfolioSegment = {
  slug: string;
  name: string;
  projects: PortfolioProject[];
};

const PORTFOLIO_ROOT = "/portofolio";
const SEGMENT_SUFFIX = "-porto";

function segmentSlugFromFolderName(folderName: string): string {
  return folderName.endsWith(SEGMENT_SUFFIX)
    ? folderName.slice(0, -SEGMENT_SUFFIX.length)
    : folderName;
}

function segmentDisplayName(slug: string): string {
  const category = getCategoryBySlug(fallbackProductCategories, slug);
  return category?.name ?? slug;
}

export function getProjectCover(project: PortfolioProject): string | null {
  return project.images.find((url) => !isVideoUrl(url)) ?? null;
}

const UNCATEGORIZED_SLUG = "lainnya";

// Loose files dropped directly in /portofolio (not inside a segment/project
// folder) are grouped into one "Lainnya" segment, each file as its own
// single-image project, so they still show up without needing to be sorted
// into the folder structure first.
function projectNameFromLooseFile(fileName: string): string {
  const withoutExt = fileName.replace(/\.[^.]+$/, "");
  const [, client] = withoutExt.split("_");
  return (client ?? withoutExt).trim();
}

// Portfolio is browsed live from the ImageKit media library folder tree
// (/portofolio/{segment}-porto/{project name}/...files) rather than a CSV,
// so new client project folders show up without a code change.
export async function getPortfolioSegments(): Promise<PortfolioSegment[]> {
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!privateKey) return [];

  const client = new ImageKit({ privateKey });

  try {
    // ImageKit's list endpoint only returns folder entries when queried with
    // type: "folder" explicitly — an untyped/mixed listing silently omits
    // them, so folders and loose files must be fetched separately.
    const [folderItems, fileItems] = await Promise.all([
      client.assets.list({ path: PORTFOLIO_ROOT, type: "folder", limit: 100 }),
      client.assets.list({ path: PORTFOLIO_ROOT, type: "file", limit: 100 }),
    ]);

    const segmentFolders = folderItems.filter(
      (item): item is typeof item & { name: string } => Boolean(item.name)
    );
    const looseFiles = fileItems.filter(
      (item): item is typeof item & { name: string; url: string } =>
        Boolean(item.name) && Boolean(item.url)
    );

    const segments = await Promise.all(
      segmentFolders.map(async (folder): Promise<PortfolioSegment> => {
        const slug = segmentSlugFromFolderName(folder.name);
        const segmentPath = `${PORTFOLIO_ROOT}/${folder.name}`;

        const projectFolders = await client.assets.list({
          path: segmentPath,
          type: "folder",
          limit: 100,
        });

        const projects = await Promise.all(
          projectFolders
            .filter((projectFolder): projectFolder is typeof projectFolder & { name: string } =>
              Boolean(projectFolder.name)
            )
            .map(async (projectFolder): Promise<PortfolioProject> => {
            const files = await client.assets.list({
              path: `${segmentPath}/${projectFolder.name}`,
              type: "file",
              limit: 100,
            });

            return {
              name: projectFolder.name,
              images: files
                .map((file) => file.url)
                .filter((url): url is string => Boolean(url)),
            };
          })
        );

        return {
          slug,
          name: segmentDisplayName(slug),
          projects: projects.filter((project) => project.images.length > 0),
        };
      })
    );

    if (looseFiles.length > 0) {
      segments.push({
        slug: UNCATEGORIZED_SLUG,
        name: "Lainnya",
        projects: looseFiles.map((file) => ({
          name: projectNameFromLooseFile(file.name),
          images: [file.url],
        })),
      });
    }

    return segments.filter((segment) => segment.projects.length > 0);
  } catch {
    return [];
  }
}
