import { Icon } from "@iconify/react";
import React from "react";

interface SkillProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: string;
    name: string;
}

const Skill: React.FC<SkillProps> = ({ icon, name, className, ...props }) => {
    return (
        <div
            className={`
                inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full
                bg-green/10 border border-green/20 backdrop-blur-sm
                hover:bg-green/20 hover:scale-105 hover:shadow-md
                transition-all duration-300 ease-in-out cursor-default select-none
                ${className || ""}
            `}
            {...props}
        >
            <Icon icon={icon} className="w-4 h-4" />
            <span className="font-mono text-xs font-medium text-green">
                {name}
            </span>
        </div>
    );
};
export default Skill;
