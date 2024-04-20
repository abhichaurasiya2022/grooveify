
import React from 'react';

interface HorizontalCardProps {
    imageUrl: string;
    name: string;
    count: string;
    duration: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ imageUrl, name, count, duration }) => {
    return (
        <div className="flex cursor-pointer items-center justify-between bg-transparent rounded-lg py-1 px-3 text-light-primary dark:text-dark-primary">
            <div className="flex items-center space-x-4">
                <img src={imageUrl} alt="Card Image" className="h-10 w-10 object-cover rounded-xs" />
                <div>
                    <p className="text-xs  font-semibold">{name}</p>
                    <p className="text-xs font-normal text-light-secondary dark:text-dark-secondary">{count}</p>
                </div>
            </div>
            <div className='flex'>
                <p className="text-xs text-nowrap text-light-secondary dark:text-dark-secondary">{duration}</p>
            </div>
        </div>
    );
};

export default HorizontalCard;
