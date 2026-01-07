import Skeleton, { SkeletonText } from "@/components/ui/skeleton";
import React from "react";
import SkillSkeleton from "./skill-badge-skeleton";

const ProjectCardSkeleton: React.FC<{ className?: string }> = ({
    className = "",
}) => {
    return (
        <div
            className={`
                block p-6 -mx-6 rounded-lg
                bg-transparent border border-transparent
                ${className}
            `}
        >
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Image Skeleton */}
                <div className="w-1/2 lg:w-36 h-1/3 lg:h-20 shrink-0">
                    <Skeleton className="w-full h-full rounded border-2 border-foreground/5" />
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0">
                    {/* Title & GitHub Link */}
                    <div className="flex flex-col gap-2 mb-2">
                        <Skeleton className="h-5 w-48 rounded" />
                        <div className="flex items-center gap-1">
                            <Skeleton className="w-5 h-5 rounded" />
                            <Skeleton className="h-3 w-24 rounded" />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-3 space-y-2">
                        <SkeletonText width="w-full" />
                        <SkeletonText width="w-3/4" />
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        <SkillSkeleton />
                        <SkillSkeleton />
                        <SkillSkeleton />
                        <SkillSkeleton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardSkeleton;
