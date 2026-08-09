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

// Portfolio is browsed live from the ImageKit media library folder tree
// (/portofolio/{segment}-porto/{project name}/...files) rather than a CSV,
// so new client project folders show up without a code change.
export async function getPortfolioSegments(): Promise<PortfolioSegment[]> {
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!privateKey) return [];

  const client = new ImageKit({ privateKey });

  try {
    const segmentFolders = await client.assets.list({
      path: PORTFOLIO_ROOT,
      type: "folder",
      limit: 100,
    });

    const segments = await Promise.all(
      segmentFolders
        .filter((folder): folder is typeof folder & { name: string } => Boolean(folder.name))
        .map(async (folder): Promise<PortfolioSegment> => {
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

    return segments.filter((segment) => segment.projects.length > 0);
  } catch {
    return [];
  }
}
