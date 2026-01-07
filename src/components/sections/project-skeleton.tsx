import ProjectCardSkeleton from "@/components/cards/project-card-skeleton";
import Skeleton from "@/components/ui/skeleton";
import React from "react";

const ProjectSkeleton: React.FC = () => {
    return (
        <section
            className="mb-16 scroll-mt-16 lg:scroll-mt-24"
            aria-label="Projects Loading"
        >
            {/* Mobile Header */}
            <div className="group flex items-center sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <Skeleton className="h-4 w-24 rounded" />
                <span className="ml-4 h-[1.5px] w-25 bg-foreground/10"></span>
            </div>

            {/* Project Cards */}
            <div className="flex flex-col gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                    <ProjectCardSkeleton key={index} />
                ))}
            </div>

            {/* Archive Link */}
            <div className="mt-8 flex items-center gap-1">
                <Skeleton className="h-4 w-36 rounded" />
                <Skeleton className="w-4 h-4 rounded" />
            </div>
        </section>
    );
};

export default ProjectSkeleton;
