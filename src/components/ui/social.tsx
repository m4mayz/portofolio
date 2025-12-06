import { Icon } from "@iconify/react";
import React from "react";
import Tooltip from "./tooltip";

interface SocialProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: string;
    link: string;
    tooltip?: string;
}

const Social: React.FC<SocialProps> = ({ icon, link, tooltip, ...props }) => {
    const className =
        "cursor-pointer text-foreground/60 hover:text-green transition-all duration-300 motion-reduce:transition-none antialiased" +
        (props.className ? ` ${props.className}` : "");

    const socialLink = (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...props}
        >
            <Icon icon={icon} className="w-7 h-7" />
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
