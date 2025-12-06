"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
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
    const [isGithubHovered, setIsGithubHovered] = useState(false);

    return (
        <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card block p-6 -mx-6 rounded-lg
                bg-transparent hover:bg-green/5
                border border-transparent hover:border-green/20
                hover:shadow-lg hover:shadow-green/10
                transition-all duration-300 ease-in-out cursor-pointer"
        >
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Image Section */}
                <div className="w-1/2 lg:w-36 h-1/3 lg:h-20 shrink-0">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        className={`w-full h-full object-cover rounded border-2 transition-colors duration-300 ${
                            isGithubHovered
                                ? "border-foreground/10"
                                : "border-foreground/10 group-hover/card:border-green/30"
                        }`}
                        width={128}
                        height={80}
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-2 mb-2">
                        <h3
                            className={`text-base font-semibold transition-colors duration-300 flex items-center gap-1 ${
                                isGithubHovered
                                    ? "text-white"
                                    : "text-white group-hover/card:text-green"
                            }`}
                        >
                            {project.title}
                            <Icon
                                icon="material-symbols:arrow-outward"
                                className={`w-4 h-4 text-foreground/60 transition-all duration-300 ${
                                    isGithubHovered
                                        ? ""
                                        : "group-hover/card:text-green group-hover/card:translate-x-1 group-hover/card:-translate-y-1"
                                }`}
                            />
                        </h3>
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.open(project.githubUrl, "_blank");
                                }}
                                onMouseEnter={() => setIsGithubHovered(true)}
                                onMouseLeave={() => setIsGithubHovered(false)}
                                className="inline-flex items-center gap-1 text-xs font-medium text-foreground/70 hover:text-green transition-colors duration-300 w-fit"
                            >
                                <Icon icon="mdi:github" className="w-5 h-5" />
                                View on GitHub
                            </a>
                        )}
                    </div>

                    <p className="text-sm leading-relaxed mb-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <Skill
                                key={index}
                                icon={tech}
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
