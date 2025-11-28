import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    link?: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, ...props }) => {
    const content = text || "Button";
    const className =
        "cursor-pointer px-8 py-3 outline-(--green) text-xs lg:text-base font-secondary whitespace-nowrap hover:font-semibold text-(--green) hover:text-background bg-transparent hover:bg-(--green) outline rounded transition-all motion-reduce:transition-none antialiased" +
        (props.className ? ` ${props.className}` : "");

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
                {content}
            </a>
        );
    }
    return (
        <button className={className} {...props}>
            {content}
        </button>
    );
};

export default Button;
