"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import Skill from "./skills";

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl?: string;
    technologies: string[];
    displayedTechnologies: string[];
}

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
    return (
        <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 -mx-6 rounded-lg
                bg-transparent hover:bg-green/5
                border border-transparent hover:border-green/20
                hover:shadow-lg hover:shadow-green/10
                transition-all duration-300 ease-in-out cursor-pointer"
        >
            <div className="flex gap-4">
                {/* Image Section */}
                <div className="w-36 h-20 shrink-0">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover rounded border-2 border-foreground/10 group-hover:border-green/30 transition-colors duration-300"
                        width={128}
                        height={80}
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-base font-semibold text-white group-hover:text-green transition-colors duration-300">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                            <ExternalLink className="w-5 h-5 text-foreground/60 group-hover:text-green transition-colors duration-300" />
                            {project.githubUrl && (
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(
                                            project.githubUrl,
                                            "_blank"
                                        );
                                    }}
                                    className="cursor-pointer"
                                    aria-label="View GitHub repository"
                                >
                                    <div
                                        className="w-5 h-5 bg-slate-500 hover:bg-green transition-colors duration-300"
                                        style={{
                                            maskImage: "url(/github.svg)",
                                            maskRepeat: "no-repeat",
                                            maskPosition: "center",
                                            maskSize: "contain",
                                            WebkitMaskImage: "url(/github.svg)",
                                            WebkitMaskRepeat: "no-repeat",
                                            WebkitMaskPosition: "center",
                                            WebkitMaskSize: "contain",
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <Skill
                                key={index}
                                svg={`/skills/${tech}.svg`}
                                name={project.displayedTechnologies[index]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
