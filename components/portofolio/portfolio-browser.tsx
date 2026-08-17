"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioProject, PortfolioSegment } from "@/data/portofolio";
import { getProjectCover } from "@/data/portofolio";
import { PortfolioModal } from "@/components/portofolio/portfolio-modal";

export function PortfolioBrowser({ segments }: { segments: PortfolioSegment[] }) {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const allProjects = segments.flatMap((segment) => segment.projects);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {allProjects.map((project, index) => {
          const cover = getProjectCover(project);

          return (
            <button
              key={`${project.name}-${index}`}
              type="button"
              onClick={() => setActiveProject(project)}
              className="group flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl border border-black/5 text-left transition-all hover:border-[#51ACAD]/40 hover:shadow-lg hover:shadow-black/5 sm:gap-3 sm:rounded-2xl"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-black/5">
                {cover && (
                  <Image
                    src={cover}
                    alt={project.name}
                    fill
                    loading={index < 4 ? undefined : "lazy"}
                    priority={index < 4}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-col gap-1 px-2 pb-2 sm:px-3 sm:pb-3">
                <p className="text-xs font-semibold text-[#1c1c1c] sm:text-sm">
                  {project.name}
                </p>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#3b8384] transition-colors group-hover:text-[#1c1c1c] sm:text-sm">
                  Lihat Detail
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {activeProject && (
        <PortfolioModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}
