import React from "react";
import Skeleton from "./skeleton";

const SocialSkeleton: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <Skeleton className={`w-7 h-7 rounded-full ${className}`} />
    );
};

export default SocialSkeleton;
