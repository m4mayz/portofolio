"use client";

import React from "react";
import portofolioData from "../data/portofolio";

const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About Me"
        >
            <div className="group flex items-center sticky top-0 z-20 -mx-6 mb-4 w-screen bg-(--background)/10 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="font-secondary text-sm font-bold text-slate-200 lg:sr-only">
                    01. Tentang Saya
                </h2>
                <span className="ml-4 h-px w-25 bg-slate-200"></span>
            </div>
            {portofolioData.aboutText.split("\n").map((line, idx) => (
                <p key={idx} className="mt-2 text-sm">
                    {line}
                </p>
            ))}
        </section>
    );
};

export default AboutSection;
