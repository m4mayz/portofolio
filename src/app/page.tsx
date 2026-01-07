"use client";
import DownloadCVButton from "@/components/cv/download-cv-button";
import Footer from "@/components/layout/footer";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/project";
import LanguageSwitcher from "@/components/ui/language-switcher";
import NavList from "@/components/ui/navlist";
import Social from "@/components/ui/social";
import { useLanguage } from "@/i18n";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>("");
    const { t } = useLanguage();

    useEffect(() => {
        // Spotlight logic
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                spotlightRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, var(--spotlight), transparent 80%)`;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Scroll Spy logic
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        window.history.replaceState(
                            null,
                            "",
                            `#${entry.target.id}`
                        );
                    }
                });
            },
            {
                root: null,
                rootMargin: "-20% 0px -35% 0px",
                threshold: 0.1,
            }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <div
                ref={spotlightRef}
                className="pointer-events-none fixed inset-0 z-30 transition duration-300"
            />
            <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[55%] lg:flex-col lg:justify-between lg:py-10 xl:py-20">
                        <div>
                            <div className="flex items-center gap-10 mb-4">
                                <span className="font-mono text-green">
                                    {t("greeting")}
                                </span>
                                <LanguageSwitcher />
                            </div>
                            <h1 className="font-title text-3xl font-bold leading-tight text-white sm:text-4xl mt-4">
                                Akmal Zaidan Hibatullah.
                            </h1>
                            <p className="mt-4 max-w-sm text-[15px] mb-6">
                                <span className="text-white font-semibold">
                                    {t("title")}
                                </span>{" "}
                                <br />
                                {t("subtitle")}
                            </p>
                            <div className="flex-row gap-10 mt-6 flex items-center">
                                <DownloadCVButton
                                    text={t("downloadCV")}
                                    showProjects={true}
                                    maxProjects={3}
                                />
                                <div className="flex-row gap-5 flex">
                                    <Social
                                        link="https://github.com/m4mayz"
                                        icon="mdi:github"
                                        tooltip="GitHub"
                                    />
                                    <Social
                                        link="https://instagram.com/m4mayz"
                                        icon="mdi:instagram"
                                        tooltip="Instagram"
                                    />
                                    <Social
                                        link="https://linkedin.com/in/m4mayz"
                                        icon="lineicons:linkedin"
                                        tooltip="LinkedIn"
                                    />
                                </div>
                            </div>

                            <nav
                                className="hidden lg:block"
                                aria-label="In-page jump links"
                            >
                                <ul className="mt-15 w-max">
                                    <NavList
                                        href="about"
                                        text={t("nav.about")}
                                        active={activeSection === "about"}
                                    />
                                    <NavList
                                        href="experience"
                                        text={t("nav.experience")}
                                        active={activeSection === "experience"}
                                    />
                                    <NavList
                                        href="projects"
                                        text={t("nav.projects")}
                                        active={activeSection === "projects"}
                                    />
                                    <NavList
                                        href="contact"
                                        text={t("nav.contact")}
                                        active={activeSection === "contact"}
                                    />
                                </ul>
                            </nav>
                        </div>
                    </header>
                    <main className="pt-24 lg:w-[60%] lg:py-24">
                        <AboutSection />
                        <ExperienceSection />
                        <ProjectsSection />
                        <ContactSection />
                        <Footer />
                    </main>
                </div>
            </div>
        </>
    );
}
