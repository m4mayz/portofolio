"use client";
import Button from "@/components/ui/button";
import NavList from "@/components/ui/navlist";
import Social from "@/components/ui/social";
import { useEffect, useRef, useState } from "react";
import AboutSection from "./section/about";

export default function Home() {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        // Spotlight logic
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                spotlightRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(117, 221, 221, 0.15), transparent 80%)`;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Scroll Spy logic
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-20% 0px -35% 0px", // Mengatur area deteksi agar lebih natural saat scroll
                threshold: 0.1,
            }
        );

        // Daftarkan section ID yang ingin dipantau
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
                            <p className="font-secondary text-highlight">
                                Halo, nama saya
                            </p>
                            <h1 className="mt-2 font-title text-3xl font-bold leading-tight text-white sm:text-5xl">
                                Akmal Zaidan Hibatullah.
                            </h1>
                            <p className="mt-4 max-w-prose text-sm">
                                Saya seorang mahasiswa{" "}
                                <span className="text-highlight">
                                    Teknik Informatika
                                </span>
                                , memiliki pengalaman dalam membangun dan
                                mengembangkan{" "}
                                <span className="text-highlight">
                                    Aplikasi Mobile
                                </span>{" "}
                                dan{" "}
                                <span className="text-highlight">Website</span>.
                                Sangat antusias terhadap teknologi dan selalu
                                ingin belajar hal baru, saat ini saya fokus
                                mencari pengalaman profesional di dunia kerja
                                nyata.
                            </p>
                            <div className="flex-row gap-10 mt-6 flex items-center">
                                <Button
                                    text="Unduh CV Saya"
                                    link="https://example.com"
                                />
                                <div className="flex-row gap-5 flex">
                                    <Social
                                        link="https://github.com/m4mayz"
                                        icon="/github.svg"
                                    />
                                    <Social
                                        link="https://instagram.com/m4mayz"
                                        icon="/instagram.svg"
                                    />
                                </div>
                            </div>

                            <nav
                                className="nav hidden lg:block"
                                aria-label="In-page jump links"
                            >
                                <ul className="mt-10 w-max">
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
                    <main className="pt-24 lg:w-[52%] lg:py-24">
                        <AboutSection />
                    </main>
                </div>
            </div>
        </>
    );
}
