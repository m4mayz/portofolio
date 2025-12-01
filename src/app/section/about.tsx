"use client";

import Skill from "@/components/ui/skills";
import React from "react";

const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 lg:scroll-mt-24"
            aria-label="About Me"
        >
            <div className="group flex items-center sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="font-mono text-sm font-bold text-slate-200 lg:sr-only">
                    <span className="text-green">01.</span> Tentang Saya
                </h2>
                <span className="ml-4 h-[1.5px] w-25 bg-slate-200"></span>
            </div>
            <p className="mt-2 text-[15px] mb-6">
                Halo! Nama saya Akmal, tapi kebanyakan teman memanggil saya
                Amayy. Saya suka membuat hal-hal yang “hidup” di perangkat
                mobile dan web. Ketertarikan saya terhadap dunia Software
                Development mulai jauh sebelum saya masuk kampus—lebih tepatnya
                saat SMP, ketika saya iseng mengunduh source code aplikasi
                Visual Basic 6 dari internet, memodifikasinya, lalu merasakan
                kepuasan yang nggak ada obatnya ketika kode itu akhirnya jalan
                sesuai keinginan. Dari situ, saya tahu: kayaknya dunia IT ini
                tempat saya banget.
            </p>
            <p className="mt-2 text-[15px] mb-6">
                Saat ini, saya sedang menempuh studi S1 Teknik Informatika dan
                aktif membangun berbagai project, dari Website sampai Fullstack
                Mobile App. Sejauh ini saya pernah mengerjakan beberapa aplikasi
                untuk organisasi kampus, project personal, hingga eksperimen
                kecil-kecilan yang bantu saya paham lebih jauh tentang software,
                cloud, and hal-hal yang berbau SaaS.
            </p>
            <p className="mt-2 text-[15px]">
                Berikut beberapa teknologi yang belakangan ini sering saya
                gunakan dan eksplor:
            </p>
            <div className="mt-4 flex flex-wrap gap-3 lg:gap-4">
                <Skill svg="/skills/javascript.svg" name="JavaScript" />
                <Skill svg="/skills/php.svg" name="PHP" />
                <Skill svg="/skills/python.svg" name="Python" />
                <Skill svg="/skills/typescript.svg" name="TypeScript" />
                <Skill svg="/skills/react.svg" name="React" />
                <Skill svg="/skills/react.svg" name="React Native" />
                <Skill svg="/skills/next-js.svg" name="Next.js" />
                <Skill svg="/skills/expo.svg" name="Expo" />
                <Skill svg="/skills/wordpress.svg" name="WordPress" />
                <Skill svg="/skills/tailwindcss.svg" name="Tailwindcss" />
                <Skill svg="/skills/gemini.svg" name="Google Gemini" />
                <Skill svg="/skills/openai.svg" name="ChatGPT" />
                <Skill svg="/skills/githubcopilot.svg" name="GitHub Copilot" />
            </div>
        </section>
    );
};

export default AboutSection;
