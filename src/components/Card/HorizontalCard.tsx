
import React from 'react';

interface HorizontalCardProps {
    imageUrl: string;
    name: string;
    count: string;
    duration: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ imageUrl, name, count, duration }) => {
    return (
        <div className="flex items-center justify-between bg-transparent rounded-lg py-1 px-3">
            <div className="flex items-center space-x-4">
                <img src={imageUrl} alt="Card Image" className="h-10 w-10 object-cover rounded-md" />
                <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-gray-500">{count}</p>
                </div>
            </div>
            <div>
                <p className="text-xs text-gray-500">{duration}</p>
            </div>
        </div>
    );
};

export default HorizontalCard;
