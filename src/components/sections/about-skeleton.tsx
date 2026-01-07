import SkillSkeleton from "@/components/cards/skill-badge-skeleton";
import Skeleton, { SkeletonText } from "@/components/ui/skeleton";
import React from "react";

const AboutSkeleton: React.FC = () => {
    return (
        <section
            className="mb-16 scroll-mt-16 lg:scroll-mt-24"
            aria-label="About Me Loading"
        >
            {/* Mobile Header */}
            <div className="group flex items-center sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <Skeleton className="h-4 w-36 rounded" />
                <span className="ml-4 h-[1.5px] w-25 bg-foreground/10"></span>
            </div>

            {/* Paragraphs */}
            <div className="mt-2 mb-6 space-y-2">
                <SkeletonText width="w-full" />
                <SkeletonText width="w-full" />
                <SkeletonText width="w-11/12" />
                <SkeletonText width="w-4/5" />
            </div>

            <div className="mt-2 mb-6 space-y-2">
                <SkeletonText width="w-full" />
                <SkeletonText width="w-full" />
                <SkeletonText width="w-3/4" />
            </div>

            <div className="mt-2 space-y-2">
                <SkeletonText width="w-2/3" />
            </div>

            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-3 lg:gap-4">
                {Array.from({ length: 13 }).map((_, index) => (
                    <SkillSkeleton key={index} />
                ))}
            </div>
        </section>
    );
};

export default AboutSkeleton;
