"use client";
import Button from "@/components/ui/button";
import NavList from "@/components/ui/navlist";
import Social from "@/components/ui/social";
import { useEffect, useRef, useState } from "react";
import AboutSection from "./section/about";
import ExperienceSection from "./section/experience";
import ProjectsSection from "./section/project";

export default function Home() {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>("");

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
                            <text className="font-mono text-green">
                                Halo, nama saya
                            </text>
                            <h1 className="font-title text-3xl font-bold leading-tight text-white sm:text-4xl mt-4">
                                Akmal Zaidan Hibatullah.
                            </h1>
                            <p className="mt-4 max-w-sm text-[15px] mb-6">
                                <span className="text-white font-semibold">
                                    Mahasiswa IT — Mobile & Web Developer
                                </span>{" "}
                                <br />
                                Belajar, membangun, dan terus berkembang sebagai
                                developer setiap hari.
                            </p>
                            <div className="flex-row gap-10 mt-6 flex items-center">
                                <Button
                                    text="Unduh CV Saya"
                                    link="https://example.com"
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
                                        text="01. Tentang Saya"
                                        active={activeSection === "about"}
                                    />
                                    <NavList
                                        href="experience"
                                        text="02. Pengalaman"
                                        active={activeSection === "experience"}
                                    />
                                    <NavList
                                        href="projects"
                                        text="03. Project"
                                        active={activeSection === "projects"}
                                    />
                                    <NavList
                                        href="contact"
                                        text="04. Kontak"
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
                    </main>
                </div>
            </div>
        </>
    );
}
