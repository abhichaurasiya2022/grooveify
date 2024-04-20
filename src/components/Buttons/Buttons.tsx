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
            className={` ${className} text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent w-full flex justify-left font-normal items-center p-1 border border-transparent rounded-md text-sm`}
        >
            {leftIcon && <span className="lg:mr-2">{leftIcon}</span>}
            <span >{label}</span>
            {rightIcon && <span className="lg:ml-2">{rightIcon}</span>}
        </button>
    );
}

export const FullWidthButton: React.FC<IconButtonProps> = ({ label, className, ...props }) => {


    return (
        <button
            {...props}
            className={` ${className} 
             w-full p-2  flex justify-center font-semibold items-center  border border-transparent rounded-md text-sm 
            text-dark-primary dark:text-light-primary bg-light-primary dark:bg-dark-primary`}
        >
            {label}
        </button>
    );
}