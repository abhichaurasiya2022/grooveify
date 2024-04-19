import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    label: string;
}

interface FullWidthButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {

    label: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ leftIcon, rightIcon, label, className, ...props }) => {


    return (
        <button
            {...props}
            className={` ${className}  hover:text-blue-700  w-full flex justify-left font-semibold items-center p-1 border border-transparent rounded-md text-sm dark:text-white`}
        >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            <span className="">{label}</span>
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    );
}

export const FullWidthButton: React.FC<IconButtonProps> = ({ label, className, ...props }) => {


    return (
        <button
            {...props}
            className={` ${className} 
             w-full p-3  flex justify-center font-semibold items-center  border border-transparent rounded-md text-sm 
             text-gray-100
             bg-gray-700 
             dark:text-gray-700 
             dark:bg-gray-100 `}
        >
            {label}
        </button>
    );
}