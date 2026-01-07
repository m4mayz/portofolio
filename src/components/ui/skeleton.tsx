import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "", ...props }) => {
    return (
        <div
            className={`animate-pulse bg-foreground/10 rounded ${className}`}
            {...props}
        />
    );
};

// Skeleton Text - untuk teks dengan berbagai ukuran
export const SkeletonText: React.FC<{ width?: string; className?: string }> = ({
    width = "w-full",
    className = "",
}) => {
    return <Skeleton className={`h-4 ${width} rounded ${className}`} />;
};

// Skeleton Circle - untuk avatar dan icons
export const SkeletonCircle: React.FC<{ size?: string; className?: string }> = ({
    size = "w-10 h-10",
    className = "",
}) => {
    return <Skeleton className={`${size} rounded-full ${className}`} />;
};

// Skeleton Box - untuk card dan container
export const SkeletonBox: React.FC<{
    width?: string;
    height?: string;
    className?: string;
}> = ({ width = "w-full", height = "h-20", className = "" }) => {
    return <Skeleton className={`${width} ${height} rounded-lg ${className}`} />;
};

export default Skeleton;
