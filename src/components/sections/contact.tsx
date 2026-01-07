"use client";

import useScrollAnimation from "@/lib/use-scroll-animation";
import { Icon } from "@iconify/react";
import React from "react";

const ContactSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();

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
                    <span className="text-green">04.</span> Kontak
                </h2>
                <span className="ml-4 h-[1.5px] w-25 bg-slate-200"></span>
            </div>

            <div className="max-w-lg">
                <h3 className="font-title text-3xl font-bold text-white mb-4">
                    Get In Touch
                </h3>
                <p className="text-[15px] mb-8 leading-relaxed">
                    Saya selalu terbuka untuk peluang baru, proyek menarik,
                    atau sekadar berdiskusi tentang teknologi. Jangan ragu
                    untuk menghubungi saya!
                </p>

                <a
                    href="mailto:akmalzaidan960@gmail.com"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 border-2 border-green text-green rounded-lg font-mono font-semibold text-sm hover:bg-green hover:text-background transition-all duration-300"
                >
                    <Icon
                        icon="mdi:email-outline"
                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110"
                    />
                    Kirim Email
                    <Icon
                        icon="material-symbols:arrow-outward"
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                </a>
            </div>
        </section>
    );
};

export default ContactSection;

