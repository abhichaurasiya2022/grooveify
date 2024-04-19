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
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" }
            ]
        },
        {
            "title": "Playlist",
            "cards": [
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" },
                { "imageUrl": "./favicon.ico", "name": "Hello", "album": "hellow", "duration": "ahh" }

            ]
        }
    ]


    return (
        <div className={`${className} `} {...props}>
            <div>
                <User avatarUrl={'./favicon.ico'} name={'Abhishek'} icon1={<IconBell />} icon2={<IconChevronDown />} />
            </div>

            <div className='h-full px-2 relative pb-20 overscroll-none overflow-scroll'>
                {data.map((activity, index) => (
                    <Activity key={index} title={activity.title} cards={activity.cards} />
                ))}
                <FullWidthButton className='' label='Hello' />
            </div>
        </div>
    );
}

const Activity: React.FC<{ title: string; cards: CardData[] }> = ({ title, cards }) => {
    return (
        <div>
            <div className="flex flex-row items-center mt-4 px-3 justify-between">
                <h1 className="text-sm font-bold tracking-tight text-gray-900 sm:text-xl">{title}</h1>
                <div className='text-gray-700 text-sm content-center cursor-pointer'>See All</div>
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
