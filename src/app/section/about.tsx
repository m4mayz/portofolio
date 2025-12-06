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
                mobile dan web. Ketertarikan saya terhadap dunia IT Development
                mulai jauh sebelum saya masuk kampus—lebih tepatnya saat SMP,
                ketika saya iseng mengunduh source code aplikasi Visual Basic 6
                dari internet, memodifikasinya, lalu merasakan kepuasan yang
                nggak ada obatnya ketika kode itu akhirnya jalan sesuai
                keinginan. Dari situ, saya tahu: kayaknya dunia IT ini tempat
                saya banget.
            </p>
            <p className="mt-2 text-[15px] mb-6">
                Saat ini, saya sedang menempuh studi S1 Teknik Informatika dan
                aktif membangun berbagai project, dari Website sampai Fullstack
                Mobile App. Sejauh ini saya pernah mengerjakan beberapa website
                dan aplikasi untuk organisasi kampus, project personal, hingga
                eksperimen kecil-kecilan yang bantu saya paham lebih jauh
                tentang software, cloud, dan hal-hal yang berbau SaaS.
            </p>
            <p className="mt-2 text-[15px]">
                Berikut beberapa teknologi yang belakangan ini sering saya
                gunakan dan eksplor:
            </p>
            <div className="mt-4 flex flex-wrap gap-3 lg:gap-4">
                <Skill icon="devicon:javascript" name="JavaScript" />
                <Skill icon="material-icon-theme:php" name="PHP" />
                <Skill icon="devicon:python" name="Python" />
                <Skill icon="devicon:typescript" name="TypeScript" />
                <Skill icon="devicon:react" name="React" />
                <Skill icon="devicon:react" name="React Native" />
                <Skill icon="devicon:nextjs" name="Next.js" />
                <Skill icon="devicon:expo" name="Expo" />
                <Skill icon="skill-icons:wordpress" name="WordPress" />
                <Skill icon="devicon:tailwindcss" name="Tailwindcss" />
                <Skill
                    icon="material-icon-theme:gemini-ai"
                    name="Google Gemini"
                />
                <Skill icon="simple-icons:openai" name="ChatGPT" />
                <Skill icon="devicon:githubcopilot" name="GitHub Copilot" />
            </div>
        </section>
    );
};

export default AboutSection;
