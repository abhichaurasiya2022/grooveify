import React, { useEffect, useState } from 'react';
import User from './User';
import HorizontalCard from '@/components/Card/HorizontalCard';
import { IconBell, IconChevronDown } from '@tabler/icons-react';
import { FullWidthButton } from '@/components/Buttons/Buttons';
import { motion } from 'framer-motion';

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
                { "imageUrl": "./believer.jpg", "name": "Believer", "album": "Imagine Dragons", "duration": "1 min ago" },
                { "imageUrl": "./ktmbk.jpg", "name": "KTMBK", "album": "Zaeden", "duration": "2 hr ago" },
                { "imageUrl": "./falling.jpg", "name": "Falling", "album": "Trevor Daniel", "duration": "30 min ago" },
                { "imageUrl": "./minnet.jpg", "name": "Minnet Eylemem", "album": "Serhat Durums", "duration": "45 min ago" },
                { "imageUrl": "./imagine.jpg", "name": "Imagine", "album": "John Lennon", "duration": "1 hr ago" },
                { "imageUrl": "./sanam.jpg", "name": "Sanam Re", "album": "Mithoon, Arijit Singh", "duration": "1 hr ago" },
                { "imageUrl": "./numb.jpg", "name": "Numb", "album": "Linkin Park", "duration": "2 hr ago" },
                { "imageUrl": "./kaleo.jpg", "name": "Way down We Go", "album": "KALEO", "duration": "30 min ago" },
                { "imageUrl": "./worried.jpg", "name": "I Ain't Worried", "album": "OneRepublic", "duration": "45 min ago" },
                { "imageUrl": "./thanku.jpg", "name": "Thank You", "album": "Lennon Stella", "duration": "1 hr ago" },
                { "imageUrl": "./kahaani.jpg", "name": "Kahaani", "album": "Dream Note", "duration": "1 hr ago" },
                { "imageUrl": "./embers.jpg", "name": "Fallen Embers", "album": "ILLENIUM", "duration": "1 min ago" },
                { "imageUrl": "./sach.jpg", "name": "Such Keh Raha Hai", "album": "KK", "duration": "2 hr ago" },
                { "imageUrl": "./cityofstars.jpg", "name": "City Of  Stars", "album": "Ryan Gosling", "duration": "30 min ago" },
            ],
        },
        {
            "title": "Playlist",
            "cards": [
                { "imageUrl": "./human.jpg", "name": "Today's Hot Hits", "album": "The most played tracks right now", "duration": getRandomDuration() },
                { "imageUrl": "./embers.jpg", "name": "Fallen Embers", "album": "ILLENIUM", "duration": getRandomDuration() },
                { "imageUrl": "./kaleo.jpg", "name": "Way down We Go", "album": "KALEO", "duration": getRandomDuration() },
                { "imageUrl": "./growing.jpg", "name": "Growing Up, Vol.1", "album": "ALEX", "duration": getRandomDuration() },
                { "imageUrl": "./rock.jpg", "name": "Rock Music", "album": "Bad Wolves & others", "duration": getRandomDuration() },
                { "imageUrl": "./childhood.webp", "name": "Детство( Childhood)", "album": "Rauf & Faik", "duration": getRandomDuration() },
                { "imageUrl": "./weeknd.jpg", "name": "The Weeknd Mix", "album": "ZYAN & others", "duration": getRandomDuration() },
                { "imageUrl": "./2010mix.jpg", "name": "2010s Mix", "album": "Arijit Singh", "duration": getRandomDuration() },
                { "imageUrl": "./thanku.jpg", "name": "Thank You", "album": "Lennon Stella", "duration": getRandomDuration() },
                { "imageUrl": "./worried.jpg", "name": "I Ain't Worried", "album": "OneRepublic", "duration": getRandomDuration() },
                { "imageUrl": "./believer.jpg", "name": "Believer", "album": "Imagine Dragons", "duration": getRandomDuration() },
                { "imageUrl": "./minnet.jpg", "name": "Minnet Eylemem", "album": "Serhat Durums", "duration": getRandomDuration() },
            ],
        },

    ]

    function getRandomDuration() {
        const hours = Math.floor(Math.random() * 3) + 1;
        const minutes = Math.floor(Math.random() * 60);
        return `${hours} hr ${minutes} min`;
    }
    return (
        <div className={`${className} text-light-primary overscroll-none overflow-scroll  dark:text-dark-primary`} {...props}>
            <div>
                <User avatarUrl={'./user.png'} name={'Abhishek'} icon1={<IconBell className='text-light-primary dark:text-dark-primary' />} icon2={<IconChevronDown className='text-light-primary dark:text-dark-primary' />} />
            </div>

            <div className='h-full  px-2 relative pb-20 overscroll-none overflow-scroll space-y-2'>
                {data.map((activity, index) => (
                    <Activity key={index} title={activity.title} cards={activity.cards} />
                ))}
                <FullWidthButton className='' label='Create Playlist' />
            </div>
        </div>
    );
}

const Activity: React.FC<{ title: string; cards: CardData[] }> = ({ title, cards }) => {
    return (
        <div>
            <div className="text-light-primary dark:text-dark-primary flex flex-row items-center mt-4 px-3 justify-between">
                <h1 className="text-sm font-medium tracking-tight  sm:text-md">{title}</h1>
                <div className=' text-sm content-center cursor-pointer text-light-secondary dark:text-dark-secondary'>See All</div>
            </div>
            <div className="flex flex-col">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <HorizontalCard imageUrl={card.imageUrl} name={card.name} count={card.album} duration={card.duration} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}


export default ActivitySection;
