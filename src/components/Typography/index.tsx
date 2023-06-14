import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
    variant?: "heading" | "subheading" | "body" | "caption"
}

const Typography = ({ children, variant, className, ...rest }: Props) => {
    const paragraphClassName = twMerge(VARIANTS[variant || "body"], className)

    return ( 
        <p className={paragraphClassName} {...rest}>
            {children}
        </p>
    );
}

const VARIANTS = {
    heading: 'text-4xl font-medium',
    subheading: 'text-2xl font-medium',
    body: 'text-base',
    caption: 'text-sm'
}
 
export default Typography;
