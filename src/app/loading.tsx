import HeaderSkeleton from "@/components/layout/header-skeleton";
import AboutSkeleton from "@/components/sections/about-skeleton";
import ContactSkeleton from "@/components/sections/contact-skeleton";
import ExperienceSkeleton from "@/components/sections/experience-skeleton";
import ProjectSkeleton from "@/components/sections/project-skeleton";

export default function Loading() {
    return (
        <>
            <div className="pointer-events-none fixed inset-0 z-30" />
            <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <HeaderSkeleton />
                    <main className="pt-24 lg:w-[60%] lg:py-24">
                        <AboutSkeleton />
                        <ExperienceSkeleton />
                        <ProjectSkeleton />
                        <ContactSkeleton />
                    </main>
                </div>
            </div>
        </>
    );
}

