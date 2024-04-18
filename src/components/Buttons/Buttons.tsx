import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
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

