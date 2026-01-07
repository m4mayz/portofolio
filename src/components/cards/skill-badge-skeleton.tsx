import Skeleton from "@/components/ui/skeleton";
import React from "react";

const SkillSkeleton: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <div
            className={`
                inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full
                bg-green/5 border border-green/10
                ${className}
            `}
        >
            <Skeleton className="w-4 h-4 rounded" />
            <Skeleton className="w-16 h-3 rounded" />
        </div>
    );
};

export default SkillSkeleton;
