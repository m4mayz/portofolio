import Skeleton from "@/components/ui/skeleton";
import React from "react";

const ContactSkeleton: React.FC = () => {
    return (
        <section
            className="mb-16 scroll-mt-16 lg:scroll-mt-24"
            aria-label="Contact Loading"
        >
            {/* Mobile Header */}
            <div className="group flex items-center sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <Skeleton className="h-4 w-24 rounded" />
                <span className="ml-4 h-[1.5px] w-25 bg-foreground/10"></span>
            </div>

            <div className="max-w-lg">
                {/* Heading */}
                <Skeleton className="h-9 w-48 rounded mb-4" />

                {/* Paragraph */}
                <div className="mb-8 space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                </div>

                {/* Button */}
                <Skeleton className="h-14 w-44 rounded-lg" />
            </div>
        </section>
    );
};

export default ContactSkeleton;
