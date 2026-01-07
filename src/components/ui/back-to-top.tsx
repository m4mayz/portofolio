"use client";

import { useLanguage } from "@/i18n";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Tooltip from "./tooltip";

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ease-out ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            <Tooltip content={t("backToTop")} position="left">
                <button
                    onClick={scrollToTop}
                    className="group relative flex items-center justify-center w-12 h-12 overflow-hidden text-green border-2 border-green rounded-full hover:text-background transition-colors duration-300 ease-out cursor-pointer"
                    aria-label={t("backToTop")}
                >
                    <span className="absolute inset-0 w-full h-full bg-green transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                    <Icon
                        icon="mdi:arrow-up"
                        className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                    />
                </button>
            </Tooltip>
        </div>
    );
};

export default BackToTop;
