import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    beginningIcon?: React.ReactNode
    endIcon?: React.ReactNode
}

const Input = ({ beginningIcon, endIcon, className, ...rest }: InputProps) => {
    const inputClassName = twMerge(BASIC_STYLE(beginningIcon, endIcon), className)

    return ( 
        <div className="relative h-fit"> 
            <div className="absolute left-3 top-1/2 -translate-y-1/2">{beginningIcon}</div>
            <input className={inputClassName} {...rest}/>
            <div className="absolute right-3 top-1/2 -translate-y-1/2">{endIcon}</div>
        </div>
    );
}

let basicStyle = "p-2.5 outline-none rounded-lg bg-gray-50 transition duration-100 border-[1.2px] border-gray-300 ring-0 focus:ring-1 focus:ring-gray-600 text-sm w-full"
const BASIC_STYLE = (beginningIcon?: React.ReactNode, endIcon?: React.ReactNode) => {

    if(beginningIcon !== undefined) {
        basicStyle += " pl-10"
    }

    if(endIcon !== undefined) {
        basicStyle += " pr-10"
    }

    return basicStyle
}

export default Input;
