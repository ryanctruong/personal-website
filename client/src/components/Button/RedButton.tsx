import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type RedButtonProps = { title?: ReactNode } & (
    | (HTMLMotionProps<"button"> & { href?: never })
    | (HTMLMotionProps<"a"> & { href: string })
)

const RedButton = ({ title, children, className = "", ...props }: RedButtonProps) => {
    const reduceMotion = useReducedMotion();
    const press = reduceMotion || ("disabled" in props && props.disabled) ? undefined : { scale: 0.98 };
    const classes = `inline-flex min-h-11 max-w-full items-center justify-center gap-2 text-sm bg-[#C0392B] hover:bg-[#A8392A] text-white font-bold py-2 px-4 w-fit rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92291d] disabled:cursor-wait disabled:opacity-70 ${className}`;

    if (props.href !== undefined) {
        return <motion.a whileTap={press} transition={{ duration: 0.12 }} {...props} className={classes}>{children ?? title}</motion.a>;
    }

    return <motion.button whileTap={press} transition={{ duration: 0.12 }} type="button" {...props} className={classes}>{children ?? title}</motion.button>;
};

export default RedButton;
