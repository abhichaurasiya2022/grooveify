import React, { useEffect, useState } from 'react';
import User from './User';
import HorizontalCard from '@/components/Card/HorizontalCard';
import { IconBell, IconChevronDown } from '@tabler/icons-react';
import { FullWidthButton } from '@/components/Buttons/Buttons';

interface CardData {
    imageUrl: string;
    name: string;
    album: string;
    duration: string;
}

interface ActivityData {
    title: string;
    cards: CardData[];
}

interface ActivitySectionProps extends React.HTMLAttributes<HTMLDivElement> { }

const ActivitySection: React.FC<ActivitySectionProps> = ({ className, ...props }) => {
    const data = [
        {
            "title": "Recently Played",
            "cards": [
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
            ]
        },
        {
            "title": "Playlist",
            "cards": [
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },

            ]
        }
    ]


    return (
        <div className={`${className} text-light-primary dark:text-dark-primary`} {...props}>
            <div>
                <User avatarUrl={'./favicon.ico'} name={'Abhishek'} icon1={<IconBell className='text-light-primary dark:text-dark-primary' />} icon2={<IconChevronDown className='text-light-primary dark:text-dark-primary' />} />
            </div>

            <div className='h-full px-2 relative pb-20 overscroll-none overflow-scroll space-y-2'>
                {data.map((activity, index) => (
                    <Activity key={index} title={activity.title} cards={activity.cards} />
                ))}
                <FullWidthButton className='pt-3' label='Create Playlist' />
            </div>
        </div>
    );
}

const Activity: React.FC<{ title: string; cards: CardData[] }> = ({ title, cards }) => {
    return (
        <div>
            <div className="text-light-primary dark:text-dark-primary flex flex-row items-center mt-4 px-3 justify-between">
                <h1 className="text-sm font-bold tracking-tight  sm:text-md">{title}</h1>
                <div className=' text-sm content-center cursor-pointer text-light-sectext-dark-secondary dark:text-dark-secondary'>See All</div>
            </div>
            <div className="flex flex-col">
                {cards.map((card, index) => (
                    <HorizontalCard key={index} imageUrl={card.imageUrl} name={card.name} count={card.album} duration={card.duration} />
                ))}
            </div>
        </div>
    );
}

export default ActivitySection;
