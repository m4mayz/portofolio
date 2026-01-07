"use client";

import { Icon } from "@iconify/react";
import { pdf } from "@react-pdf/renderer";
import React, { useState } from "react";
import CVDocument from "./cv-document";

interface DownloadCVButtonProps {
    showProjects?: boolean;
    maxExperiences?: number;
    maxProjects?: number;
    fileName?: string;
    text?: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({
    showProjects = true,
    maxExperiences,
    maxProjects = 3,
    fileName = "CV_Akmal_Zaidan_Hibatullah.pdf",
    text = "Unduh CV",
}) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async () => {
        try {
            setIsGenerating(true);

            // Generate PDF
            const blob = await pdf(
                <CVDocument
                    showProjects={showProjects}
                    maxExperiences={maxExperiences}
                    maxProjects={maxProjects}
                />
            ).toBlob();

            // Create download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Gagal mengunduh CV. Silakan coba lagi.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isGenerating}
            className="cursor-pointer group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-green border-2 border-green rounded-lg hover:text-background transition-colors duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <span className="absolute inset-0 w-full h-full bg-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 font-mono font-semibold text-xs lg:text-base tracking-wide flex items-center gap-2">
                {isGenerating ? (
                    <>
                        <Icon
                            icon="mdi:loading"
                            className="w-5 h-5 animate-spin"
                        />
                        <span>Generating...</span>
                    </>
                ) : (
                    <>
                        <Icon icon="mdi:download" className="w-5 h-5" />
                        <span>{text}</span>
                    </>
                )}
            </span>
        </button>
    );
};

export default DownloadCVButton;
