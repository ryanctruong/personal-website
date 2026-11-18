import type { ComponentPropsWithoutRef, ReactNode } from "react";

type RedButtonProps = { title?: ReactNode } & (
    | (ComponentPropsWithoutRef<"button"> & { href?: never })
    | (ComponentPropsWithoutRef<"a"> & { href: string })
)

const RedButton = ({ title, children, className = "", ...props }: RedButtonProps) => {
    const classes = `inline-flex items-center justify-center gap-2 text-sm bg-[#E8412C] hover:bg-[#C0392B] text-white font-bold py-2 px-4 w-fit rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92291d] disabled:cursor-wait disabled:opacity-70 ${className}`;

    if (props.href !== undefined) {
        return <a {...props} className={classes}>{children ?? title}</a>;
    }

    return <button type="button" {...props} className={classes}>{children ?? title}</button>;
};

export default RedButton;
