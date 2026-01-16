"use client";

import CVDocument from "@/components/cv/cv-document";
import { useLanguage } from "@/i18n";
import { useEffect, useState } from "react";

export default function CVPreviewPage() {
    const [PDFViewer, setPDFViewer] = useState<any>(null);
    const { t, language } = useLanguage();

    useEffect(() => {
        // Dynamically import PDFViewer only on client-side
        import("@react-pdf/renderer").then((module) => {
            setPDFViewer(() => module.PDFViewer);
        });
    }, []);

    // Get translations for CV
    const cvTranslations = {
        relevantExperience: t("cv.relevantExperience"),
        skills: t("cv.skills"),
        selectedProjects: t("cv.selectedProjects"),
        education: t("cv.education"),
        interests: t("cv.interests"),
        gpa: t("cv.gpa"),
    };

    if (!PDFViewer) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-background">
                <div className="text-white text-xl">Loading PDF Viewer...</div>
            </div>
        );
    }

    return (
        <div className="w-full h-screen">
            <PDFViewer width="100%" height="100%" showToolbar={true}>
                <CVDocument
                    showProjects={true}
                    maxProjects={3}
                    language={language}
                    translations={cvTranslations}
                />
            </PDFViewer>
        </div>
    );
}
