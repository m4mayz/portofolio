import SmoothScroll from "@/components/smoothscroll";
import type { Metadata } from "next";
import { Darker_Grotesque, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

const darkerGrotesque = Darker_Grotesque({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-darker-grotesque",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
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
                className={`${darkerGrotesque.variable} ${poppins.variable} ${spaceMono.variable} antialiased`}
            >
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
