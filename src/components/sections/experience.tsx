"use client";

import ExperienceCard from "@/components/cards/experience-card";
import data from "@/data/experience.json";
import useScrollAnimation from "@/lib/use-scroll-animation";
import { Icon } from "@iconify/react";
import React from "react";

const ExperienceSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();

    return (
        <section
            ref={ref}
            id="experience"
            className={`mb-16 scroll-mt-16 lg:scroll-mt-24 transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            }`}
            aria-label="Experience"
        >
            <div className="group flex items-center sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="font-mono text-sm font-bold text-slate-200 lg:sr-only">
                    <span className="text-green">02.</span> Pengalaman
                </h2>
                <span className="ml-4 h-[1.5px] w-25 bg-slate-200"></span>
            </div>
            <div className="flex flex-col gap-4">
                {data.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        title={item.title}
                        company={item.company}
                        period={item.period}
                        description={item.description}
                    />
                ))}
            </div>
            <a
                href="/resume"
                target="_blank"
                className="group/link inline-flex items-center gap-1 mt-6 text-sm font-mono font-semibold text-white hover:text-green transition-colors duration-300"
            >
                Lihat CV Lengkap
                <Icon
                    icon="material-symbols:arrow-outward"
                    className="w-4 h-4 text-foreground/60 transition-all duration-300 group-hover/link:text-green group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
            </a>
        </section>
    );
};

export default ExperienceSection;

