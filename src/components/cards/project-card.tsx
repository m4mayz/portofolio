"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
    const [isImageHovered, setIsImageHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    // Check if mounted (for portal) - must use useEffect to avoid hydration mismatch
    useEffect(() => {
        // eslint-disable-next-line
        setIsMounted(true);
    }, []);

    // Use the same approach as spotlight - window event listener
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (previewRef.current && isImageHovered) {
                previewRef.current.style.left = `${e.clientX}px`;
                previewRef.current.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isImageHovered]);

    const handleMouseEnter = () => {
        setIsImageHovered(true);
    };

    const handleMouseLeave = () => {
        setIsImageHovered(false);
    };

    // Preview component rendered via portal (outside the transformed card)
    const previewElement = isMounted
        ? createPortal(
              <div
                  ref={previewRef}
                  className="fixed z-50 pointer-events-none transition-opacity duration-200 ease-out"
                  style={{
                      transform: "translateY(-50%)",
                      opacity: isImageHovered ? 1 : 0,
                  }}
              >
                  <div className="aspect-video w-96 lg:w-full -mx-40 lg:-mx-50  rounded-xl overflow-hidden border-2 border-green/40 shadow-2xl shadow-green/20 bg-background animate-fade-in">
                      <Image
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-96 lg:w-full h-full object-cover"
                          width={1920}
                          height={1080}
                          priority
                      />
                  </div>
              </div>,
              document.body
          )
        : null;

    return (
        <>
            {previewElement}
            <div className="group/card relative block -mx-6 p-5 rounded-lg bg-transparent hover:bg-green/5 border border-transparent hover:border-green/20 hover:shadow-lg hover:shadow-green/10 transition-all duration-300 ease-in-out">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex flex-col sm:flex-row gap-5">
                    {/* Image Section - Larger and more prominent */}
                    <div
                        ref={imageContainerRef}
                        className="w-full sm:w-44 h-40 sm:h-28 shrink-0 relative overflow-hidden rounded-lg border border-white/10 group-hover/card:border-green/20 transition-colors duration-300"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Loading skeleton overlay */}
                        {isImageLoading && (
                            <div className="absolute inset-0 bg-foreground/10 animate-pulse z-10" />
                        )}
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-[5] opacity-60 group-hover/card:opacity-30 transition-opacity duration-300" />
                        {/* Hover indicator */}
                        <div
                            className={`absolute inset-0 z-[6] flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
                                isImageHovered ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <Icon
                                icon="mdi:eye-outline"
                                className="w-8 h-8 text-white/80"
                            />
                        </div>
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            className={`w-full h-full object-cover transition-all duration-700 group-hover/card:scale-110 ${
                                isImageLoading
                                    ? "opacity-0 scale-105"
                                    : "opacity-100 scale-100"
                            }`}
                            width={176}
                            height={112}
                            priority={priority}
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            onLoad={() => setIsImageLoading(false)}
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 min-w-0 flex flex-col">
                        {/* Header with title and links */}
                        <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex-1">
                                {project.projectUrl ? (
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-1.5 text-lg font-semibold text-white hover:text-green transition-colors duration-300"
                                    >
                                        <span className="relative">
                                            {project.title}
                                            <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-green group-hover/link:w-full transition-all duration-300" />
                                        </span>
                                        <Icon
                                            icon="material-symbols:arrow-outward"
                                            className="w-4 h-4 text-foreground/50 group-hover/link:text-green group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300"
                                        />
                                    </a>
                                ) : (
                                    <h3 className="text-lg font-semibold text-white">
                                        {project.title}
                                    </h3>
                                )}
                            </div>

                            {/* GitHub link as icon button */}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-white/5 hover:bg-green/20 border border-white/10 hover:border-green/30 text-foreground/60 hover:text-green transition-all duration-300"
                                    title="View on GitHub"
                                >
                                    <Icon
                                        icon="mdi:github"
                                        className="w-5 h-5"
                                    />
                                </a>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-foreground/80 mb-4 line-clamp-2">
                            {project.description}
                        </p>

                        {/* Technologies - at bottom */}
                        <div className="flex flex-wrap gap-2 mt-auto">
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
        </>
    );
};

export default ProjectCard;
