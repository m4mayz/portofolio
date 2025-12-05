"use client";

import ExperienceCard from "@/components/ui/experienceCard";
import data from "@/data/experience.json";
import React from "react";

const ExperienceSection: React.FC = () => {
    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 lg:scroll-mt-24"
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
        </section>
    );
};

export default ExperienceSection;
