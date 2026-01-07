import React from "react";

interface ExperienceProps {
    title: string;
    company: string;
    period: string;
    description: string[];
    className?: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({
    title,
    company,
    period,
    description,
    className,
}) => {
    return (
        <div
            className={`
                group block p-6 -mx-6 rounded-lg
                bg-transparent hover:bg-green/5
                border border-transparent hover:border-green/20
                hover:shadow-lg hover:shadow-green/10
                transition-all duration-300 ease-in-out
                ${className || ""}
            `}
        >
            <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                    <h3 className="font-title font-semibold text-white group-hover:text-green transition-colors duration-300">
                        {title} · {company}
                    </h3>
                </div>
            </div>

            <p className="text-xs text-foreground/60 mb-3 uppercase tracking-wide font-medium">
                {period}
            </p>

            <ul className="space-y-2">
                {description.map((item, index) => (
                    <li
                        key={index}
                        className="flex gap-2 text-sm leading-relaxed"
                    >
                        <span className="text-green shrink-0 antialiased">
                            ▹
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;
