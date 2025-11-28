import React from "react";

interface SocialProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: string;
    link: string;
}

const Social: React.FC<SocialProps> = ({ icon, link, ...props }) => {
    const className =
        "cursor-pointer text-(--green) hover:text-(--green-hover) transition-all motion-reduce:transition-none antialiased" +
        (props.className ? ` ${props.className}` : "");
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...props}
        >
            <div
                className="w-6 h-6 bg-slate-500 hover:bg-white transition-all motion-reduce:transition-none"
                style={{
                    maskImage: `url(${icon})`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskImage: `url(${icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",
                }}
            />
        </a>
    );
};
export default Social;
