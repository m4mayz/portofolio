import React from "react";
import Tooltip from "./tooltip";

interface SocialProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: string;
    link: string;
    tooltip?: string;
}

const Social: React.FC<SocialProps> = ({ icon, link, tooltip, ...props }) => {
    const className =
        "cursor-pointer text-green hover:text-(--green-hover) transition-all motion-reduce:transition-none antialiased" +
        (props.className ? ` ${props.className}` : "");

    const socialLink = (
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

    if (tooltip) {
        return (
            <Tooltip content={tooltip} position="top">
                {socialLink}
            </Tooltip>
        );
    }

    return socialLink;
};
export default Social;
