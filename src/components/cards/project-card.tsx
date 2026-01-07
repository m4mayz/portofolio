"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import Skill from "./skill-badge";

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl?: string;
    githubUrl?: string;
    technologies: string[];
    displayedTechnologies: string[];
}

// Base64 blur placeholder untuk loading state
const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ALOzsv///+Xl5aampgCampr6+vrw8PCSkpIAeXl5xMTE0NDQZGRkLpQRFwDXJj0AAAAASUVORK5CYII=";

const ProjectCard: React.FC<{ project: ProjectProps; priority?: boolean }> = ({
    project,
    priority = false,
}) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <div className="group/card block p-6 -mx-6 rounded-lg bg-transparent hover:bg-green/5 border border-transparent hover:border-green/20 hover:shadow-lg hover:shadow-green/10 transition-all duration-300 ease-in-out">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Image Section */}
                <div className="w-1/2 lg:w-36 h-1/3 lg:h-20 shrink-0 relative overflow-hidden rounded border-2 border-foreground/10">
                    {/* Loading skeleton overlay */}
                    {isImageLoading && (
                        <div className="absolute inset-0 bg-foreground/10 animate-pulse z-10" />
                    )}
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                            isImageLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"
                        }`}
                        width={144}
                        height={80}
                        priority={priority}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        onLoad={() => setIsImageLoading(false)}
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-2 mb-2">
                        {project.projectUrl ? (
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-base font-semibold transition-colors duration-300 flex items-center gap-1 w-fit text-white hover:text-green"
                            >
                                {project.title}
                                <Icon
                                    icon="material-symbols:arrow-outward"
                                    className="w-4 h-4 text-foreground/60 transition-all duration-300 group-hover:text-green group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>
                        ) : (
                            <h3 className="text-base font-semibold text-white">
                                {project.title}
                            </h3>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
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
        </div>
    );
};

export default ProjectCard;

