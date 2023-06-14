import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "small"
    beginningIcon?: React.ReactNode
    endIcon?: React.ReactNode
}

const Button = ({ children, variant, beginningIcon, endIcon, className, ...rest }: Props) => {
    const buttonClassName = twMerge(
        `${buttonStyle} ${VARIANTS[variant || "primary"]}`,
        className
    )

    return (
        <button className={buttonClassName} {...rest}>
            {beginningIcon}
            {children}
            {endIcon}
        </button>
    );
}

const buttonStyle = "flex items-center py-2 px-5 transition duration-200 border-[1.5px] border-[#042b53] focus:ring-4 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:border-0 disabled:brightness-100 disabled:cursor-not-allowe"

const VARIANTS = {
    primary: 'bg-[#042b53] text-white hover:bg-transparent hover:text-[#042b53] active:brightness-90',
    secondary: 'hover:bg-[#042b53] hover:text-white bg-transparent text-[#042b53] active:brightness-90',
    small: ''
}

export default Button;
