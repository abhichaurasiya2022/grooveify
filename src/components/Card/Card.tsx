import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, subtitle }) => {
    return (
        <div className="hover:shadow-xl hover:scale-105 transition-transform duration-150 ease-in-out transition-shadow duration-200 ease-in-out flex bg-transparent overflow-clip shadow-lg rounded-lg flex-col min-h-44 min-w-44">
            <img className="h-44 w-44 object-contain" src={imageUrl} alt="Card image" />
            <div className="px-2 py-2 text-light-primary dark:text-dark-primary">
                <div className="font-bold text-md">{title}</div>
                <p className="text-light-sectext-dark-secondary dark:text-dark-secondary text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default Card;
