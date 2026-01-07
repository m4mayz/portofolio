import Skeleton from "@/components/ui/skeleton";
import SocialSkeleton from "@/components/ui/social-skeleton";
import React from "react";

const HeaderSkeleton: React.FC = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[55%] lg:flex-col lg:justify-between lg:py-10 xl:py-20">
            <div>
                {/* Greeting */}
                <Skeleton className="h-4 w-28 rounded mb-4" />

                {/* Name */}
                <Skeleton className="h-9 w-80 rounded mb-4" />

                {/* Subtitle */}
                <div className="mt-4 max-w-sm space-y-2 mb-6">
                    <Skeleton className="h-5 w-64 rounded" />
                    <Skeleton className="h-4 w-72 rounded" />
                    <Skeleton className="h-4 w-48 rounded" />
                </div>

                {/* Buttons & Socials */}
                <div className="flex-row gap-10 mt-6 flex items-center">
                    {/* Download CV Button */}
                    <Skeleton className="h-10 w-32 rounded-full" />

                    {/* Social Icons */}
                    <div className="flex-row gap-5 flex">
                        <SocialSkeleton />
                        <SocialSkeleton />
                        <SocialSkeleton />
                    </div>
                </div>

                {/* Navigation (Desktop) */}
                <nav className="hidden lg:block" aria-label="Loading navigation">
                    <ul className="mt-15 w-max space-y-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Skeleton className="h-[1px] w-8" />
                                <Skeleton className="h-3 w-28 rounded" />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderSkeleton;
