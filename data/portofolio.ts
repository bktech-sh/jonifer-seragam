import ImageKit from "@imagekit/nodejs";
import { isVideoUrl } from "@/data/catalog";

export type PortfolioProject = {
  name: string;
  images: string[];
};

export type PortfolioSegment = {
  slug: string;
  name: string;
  projects: PortfolioProject[];
};

const PORTFOLIO_ROOT = "/portofolio-jonifer";
const PORTFOLIO_HEADER_PATH = "/portofolio-header";

// Hero carousel images for the portfolio page, browsed live from ImageKit
// and ordered by the numeric prefix on each file name (e.g. "1. ...jpg").
export async function getPortfolioHeroImages(): Promise<string[]> {
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!privateKey) return [];

  const client = new ImageKit({ privateKey });

  try {
    const files = await client.assets.list({
      path: PORTFOLIO_HEADER_PATH,
      type: "file",
      limit: 100,
    });

    return [...files]
      .sort((a, b) => leadingNumber(a.name ?? "") - leadingNumber(b.name ?? ""))
      .map((file) => file.url)
      .filter((url): url is string => Boolean(url))
      .filter((url) => !isVideoUrl(url));
  } catch {
    return [];
  }
}

export function getProjectCover(project: PortfolioProject): string | null {
  return project.images.find((url) => !isVideoUrl(url)) ?? null;
}

function toPascalCase(folderName: string): string {
  return folderName
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function leadingNumber(name: string): number {
  const match = name.match(/^(\d+)/);
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

// Portfolio is browsed live from the ImageKit media library folder tree
// (/portofolio-jonifer/{folder anak}/{folder cucu}/...files). Each "folder
// anak" becomes a filter chip, each "folder cucu" inside it becomes one
// project card, so new folders show up without a code change.
export async function getPortfolioSegments(): Promise<PortfolioSegment[]> {
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!privateKey) return [];

  const client = new ImageKit({ privateKey });

  try {
    const segmentFolders = await client.assets.list({
      path: PORTFOLIO_ROOT,
      type: "folder",
      limit: 200,
    });

    const segments = await Promise.all(
      segmentFolders
        .filter((folder): folder is typeof folder & { name: string } => Boolean(folder.name))
        .map(async (folder): Promise<PortfolioSegment> => {
          const segmentPath = `${PORTFOLIO_ROOT}/${folder.name}`;

          const projectFolders = await client.assets.list({
            path: segmentPath,
            type: "folder",
            limit: 200,
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

          const sortedProjects = [...projects].sort(
            (a, b) => leadingNumber(a.name) - leadingNumber(b.name)
          );

          return {
            slug: folder.name,
            name: toPascalCase(folder.name),
            projects: sortedProjects.filter((project) => project.images.length > 0),
          };
        })
    );

    return segments.filter((segment) => segment.projects.length > 0);
  } catch {
    return [];
  }
}
