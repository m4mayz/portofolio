import React from "react";

interface NavProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    text?: string;
    active?: boolean; // Tambahkan prop active
}

const NavList: React.FC<NavProps> = ({ href, text, active = false }) => {
    const content = text || "NavList";
    // Pisahkan 3 karakter pertama dan sisanya
    const firstThree = content.slice(0, 3);
    const rest = content.slice(3);
    const hrefLink = "#" + href || "#";

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href || "";
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            // Update URL hash
            window.history.pushState(null, "", `#${targetId}`);
        }
    };

    return (
        <li>
            <a
                href={hrefLink}
                className="group flex items-center py-3"
                onClick={handleClick}
            >
                <span
                    className={`mr-4 h-[1.5px] transition-all motion-reduce:transition-none ${
                        active
                            ? "w-25 bg-slate-200"
                            : "w-15 bg-slate-600 group-hover:w-25 group-hover:bg-slate-200"
                    }`}
                ></span>
                <span
                    className={`font-mono text-xs font-bold transition-colors ${
                        active
                            ? "text-slate-200"
                            : "text-slate-500 group-hover:text-slate-200"
                    }`}
                >
                    <span className="text-green">{firstThree}</span>
                    {rest}
                </span>
            </a>
        </li>
    );
};

export default NavList;
