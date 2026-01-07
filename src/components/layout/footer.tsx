"use client";

import { useLanguage } from "@/i18n";
import { Icon } from "@iconify/react";
import React from "react";

const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer>
            <div className="flex flex-col gap-4">
                <p className="text-xs text-foreground/60 leading-relaxed max-w-md">
                    {t("footer.designInspired")}{" "}
                    <a
                        href="https://brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green hover:underline transition-colors"
                    >
                        Brittany Chiang
                    </a>
                </p>
                <p className="text-xs text-foreground/40 flex items-center gap-1.5">
                    {t("footer.builtWith")}
                    <Icon icon="devicon:nextjs" className="w-4 h-4" />
                    <span>&</span>
                    <Icon icon="devicon:tailwindcss" className="w-4 h-4" />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
