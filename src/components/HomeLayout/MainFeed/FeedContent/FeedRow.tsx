import Card from '@/components/Card/Card';
import React from 'react';

interface FeedRowProps {
    title: string;
    data: { imageUrl: string; title: string; subtitle: string }[];
}

const FeedRow: React.FC<FeedRowProps> = ({ title, data }) => {
    return (
        <div className="py-4">
            <div className='flex flex-row justify-between text-light-primary dark:text-dark-primary text-center'>

                <h1 className="text-sm font-bold tracking-tight  sm:text-xl">
                    {title}
                </h1>
                <div className='text-light-sectext-dark-secondary dark:text-dark-secondary text-sm content-center cursor-pointer'>See All</div>

            </div>

            <div className="flex p-2 overflow-x-scroll space-x-4">
                {data.map((item, index) => (
                    <Card className='' key={index} imageUrl={item.imageUrl} title={item.title} subtitle={item.subtitle} />
                ))}
            </div>
        </div>
    );
};

export default FeedRow;
