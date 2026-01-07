"use client";

import Skill from "@/components/cards/skill-badge";
import { useLanguage } from "@/i18n";
import useScrollAnimation from "@/lib/use-scroll-animation";
import React from "react";

const AboutSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
    const { t } = useLanguage();

    return (
        <section
            ref={ref}
            id="about"
            className={`mb-16 scroll-mt-16 lg:scroll-mt-24 transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            }`}
            aria-label="About Me"
        >
            <div className="group flex items-center sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="font-mono text-sm font-bold text-slate-200 lg:sr-only">
                    <span className="text-green">01.</span> {t("about.title")}
                </h2>
                <span className="ml-4 h-[1.5px] w-25 bg-slate-200"></span>
            </div>
            <p className="mt-2 text-[15px] mb-6">{t("about.paragraph1")}</p>
            <p className="mt-2 text-[15px] mb-6">{t("about.paragraph2")}</p>
            <p className="mt-2 text-[15px]">{t("about.techIntro")}</p>
            <div className="mt-4 flex flex-wrap gap-3 lg:gap-4">
                <Skill icon="devicon:javascript" name="JavaScript" />
                <Skill icon="material-icon-theme:php" name="PHP" />
                <Skill icon="devicon:python" name="Python" />
                <Skill icon="devicon:typescript" name="TypeScript" />
                <Skill icon="devicon:react" name="React" />
                <Skill icon="devicon:react" name="React Native" />
                <Skill icon="devicon:nextjs" name="Next.js" />
                <Skill icon="devicon:expo" name="Expo" />
                <Skill icon="skill-icons:wordpress" name="WordPress" />
                <Skill icon="devicon:tailwindcss" name="Tailwindcss" />
                <Skill
                    icon="material-icon-theme:gemini-ai"
                    name="Google Gemini"
                />
                <Skill icon="simple-icons:openai" name="ChatGPT" />
                <Skill icon="devicon:githubcopilot" name="GitHub Copilot" />
            </div>
        </section>
    );
};

export default AboutSection;
