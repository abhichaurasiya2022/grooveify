import React from 'react';
import { motion } from "framer-motion";

interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    imageUrl: string;
    title: string;
    subtitle: string;
}

const Card: React.FC<CardProps> = ({ className, imageUrl, title, subtitle }) => {
    return (
        <motion.div
            className={` ${className}  hover:scale-105 transition-transform duration-150 ease-in-out transition-shadow duration-200 ease-in-out flex bg-transparent overflow-clip  rounded-lg flex-col min-h-44 min-w-44`}
            whileHover={{ scale: 1.05 }}
        >
            <img className="rounded-lg bg-light-secondary dark:bg-dark-bgNav h-44 w-44 object-cover" src={imageUrl} alt="Card image" />
            <div className=" px-2 py-2 text-light-primary dark:text-dark-primary">
                <div className="font-bold text-md">{title}</div>
                <p className="text-light-sectext-dark-secondary dark:text-dark-secondary text-sm">{subtitle}</p>
            </div>
        </motion.div>
    );
};

export default Card;
