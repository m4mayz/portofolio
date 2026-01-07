"use client";

import CVDocument from "@/components/cv/cv-document";
import { useEffect, useState } from "react";

export default function CVPreviewPage() {
    const [PDFViewer, setPDFViewer] = useState<any>(null);

    useEffect(() => {
        // Dynamically import PDFViewer only on client-side
        import("@react-pdf/renderer").then((module) => {
            setPDFViewer(() => module.PDFViewer);
        });
    }, []);

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
                <CVDocument showProjects={true} maxProjects={3} />
            </PDFViewer>
        </div>
    );
}
