"use client";

import { useLanguage } from "@/i18n";
import { Icon } from "@iconify/react";
import React from "react";
import Tooltip from "./tooltip";

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "id" ? "en" : "id");
    };

    return (
        <Tooltip
            content={`Switch to ${
                language === "id" ? "English" : "Bahasa Indonesia"
            }`}
        >
            <button
                onClick={toggleLanguage}
                className="group relative flex items-center gap-2 px-3 py-2 rounded-lg border border-foreground/20 hover:border-green/50 hover:bg-green/5 transition-all duration-300"
            >
                <span className="font-mono text-xs font-semibold text-foreground/80 group-hover:text-green transition-colors uppercase">
                    {language}
                </span>
                <Icon
                    icon="mdi:swap-horizontal"
                    className="w-4 h-4 text-foreground/40 group-hover:text-green transition-colors"
                />
            </button>
        </Tooltip>
    );
};

export default LanguageSwitcher;
