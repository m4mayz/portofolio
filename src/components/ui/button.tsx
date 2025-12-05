import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    link?: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, ...props }) => {
    const content = text || "Button";
    const className =
        "group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-green border-2 border-green rounded-lg hover:text-background transition-colors duration-300 ease-out" +
        (props.className ? ` ${props.className}` : "");

    const buttonContent = (
        <>
            <span className="absolute inset-0 w-full h-full bg-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 font-mono font-semibold text-xs lg:text-base tracking-wide">
                {content}
            </span>
        </>
    );

    if (link) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                role="button"
                tabIndex={0}
            >
                {buttonContent}
            </a>
        );
    }
    return (
        <button className={className} {...props}>
            {buttonContent}
        </button>
    );
};

export default Button;
