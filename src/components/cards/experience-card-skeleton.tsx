import Skeleton, { SkeletonText } from "@/components/ui/skeleton";
import React from "react";

const ExperienceCardSkeleton: React.FC<{ className?: string }> = ({
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
            {/* Title & Company */}
            <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                    <Skeleton className="h-5 w-3/4 rounded" />
                </div>
            </div>

            {/* Period */}
            <Skeleton className="h-3 w-32 rounded mb-3" />

            {/* Description List */}
            <div className="space-y-3">
                <div className="flex gap-2">
                    <Skeleton className="w-3 h-3 rounded shrink-0 mt-1" />
                    <SkeletonText width="w-full" />
                </div>
                <div className="flex gap-2">
                    <Skeleton className="w-3 h-3 rounded shrink-0 mt-1" />
                    <SkeletonText width="w-5/6" />
                </div>
                <div className="flex gap-2">
                    <Skeleton className="w-3 h-3 rounded shrink-0 mt-1" />
                    <SkeletonText width="w-4/5" />
                </div>
            </div>
        </div>
    );
};

export default ExperienceCardSkeleton;
