import SmoothScroll from "@/components/smoothscroll";
import type { Metadata } from "next";
import { Gabarito, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-gabarito",
});

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-plus-jakarta-sans",
});

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export const metadata: Metadata = {
    title: "Akmal Zaidan Hibatullah - Portfolio",
    description: "Portfolio website of Akmal Zaidan Hibatullah",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${gabarito.variable} ${plusJakartaSans.variable} ${spaceMono.variable} antialiased`}
            >
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
