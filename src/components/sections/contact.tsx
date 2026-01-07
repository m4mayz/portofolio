"use client";

import { useLanguage } from "@/i18n";
import useScrollAnimation from "@/lib/use-scroll-animation";
import { Icon } from "@iconify/react";
import React from "react";

const ContactSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
    const { t } = useLanguage();

    return (
        <section
            ref={ref}
            id="contact"
            className={`mb-16 scroll-mt-16 lg:scroll-mt-24 transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            }`}
            aria-label="Contact"
        >
            <div className="group flex items-center sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="font-mono text-sm font-bold text-slate-200 lg:sr-only">
                    <span className="text-green">04.</span> {t("contact.title")}
                </h2>
                <span className="ml-4 h-[1.5px] w-25 bg-slate-200"></span>
            </div>

            <div className="max-w-lg">
                <h3 className="font-title text-3xl font-bold text-white mb-4">
                    {t("contact.heading")}
                </h3>
                <p className="text-[15px] mb-8 leading-relaxed">
                    {t("contact.description")}
                </p>

                <a
                    href="mailto:akmalzaidan960@gmail.com"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-green border-2 border-green rounded-lg hover:text-background transition-colors duration-300 ease-out"
                >
                    <span className="absolute inset-0 w-full h-full bg-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    <span className="relative z-10 font-mono font-semibold text-sm flex items-center gap-3">
                        <Icon
                            icon="mdi:email-outline"
                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                        />
                        {t("contact.sendEmail")}
                        <Icon
                            icon="material-symbols:arrow-outward"
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </span>
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
