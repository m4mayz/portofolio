"use client";

import React, { useState } from "react";

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = "top",
    className = "",
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    const arrowClasses = {
        top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-(--green)",
        bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-(--green)",
        left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-(--green)",
        right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-(--green)",
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <div
                className={`
                    absolute z-50 px-3 py-2 text-xs font-medium text-background
                    bg-green rounded-lg shadow-lg whitespace-nowrap
                    transition-all duration-200 motion-reduce:transition-none
                    ${
                        isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none"
                    }
                    ${positionClasses[position]}
                    ${className}
                `}
            >
                {content}
                <div
                    className={`
                            absolute w-0 h-0 border-4
                            transition-all duration-200 motion-reduce:transition-none
                            ${arrowClasses[position]}
                        `}
                />
            </div>
        </div>
    );
};
export default Tooltip;
