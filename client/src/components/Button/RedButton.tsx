import type { ComponentPropsWithoutRef, ReactNode } from "react";

type RedButtonProps = { title?: ReactNode } & (
    | (ComponentPropsWithoutRef<"button"> & { href?: never })
    | (ComponentPropsWithoutRef<"a"> & { href: string })
)

const RedButton = ({ title, children, className = "", ...props }: RedButtonProps) => {
    const classes = `inline-flex min-h-11 max-w-full items-center justify-center gap-2 text-sm bg-[#C0392B] hover:bg-[#A8392A] text-white font-bold py-2 px-4 w-fit rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92291d] disabled:cursor-wait disabled:opacity-70 ${className}`;

    if (props.href !== undefined) {
        return <a {...props} className={classes}>{children ?? title}</a>;
    }

    return <button type="button" {...props} className={classes}>{children ?? title}</button>;
};

export default RedButton;
