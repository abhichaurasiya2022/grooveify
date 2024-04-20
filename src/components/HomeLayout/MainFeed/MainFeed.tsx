import React from 'react';
import Pagination from './Pagination';
import ActionHeader from './ActionHeader';
import { Banner } from '@/components/Banner/Banner';
import Card from '@/components/Card/Card';
import FeedRow from './FeedContent/FeedRow';

interface MainFeedProps extends React.HTMLAttributes<HTMLDivElement> {
    isActivityBarOpen: boolean;
    setIsActivityBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsActivityBarDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;

}
const MainFeed: React.FC<MainFeedProps> = ({ isActivityBarOpen, setIsActivityBarOpen, className, setIsActivityBarDrawerOpen, ...props }) => {
    const data0 = [
        { imageUrl: './human.jpg', title: "Today's Hot Hits", subtitle: 'The most played tracks right now' },
        { imageUrl: './embers.jpg', title: 'Fallen Embers', subtitle: 'ILLENIUM' },
        { imageUrl: './kaleo.jpg', title: 'Way down We Go', subtitle: 'KALEO' },
        { imageUrl: './growing.jpg', title: 'Growing Up, Vol.1', subtitle: 'ALEX' },
        { imageUrl: './rock.jpg', title: 'Rock Music', subtitle: 'Bad Wolves & others' },
        { imageUrl: './childhood.webp', title: 'Детство( Childhood)', subtitle: 'Rauf & Faik' },
        { imageUrl: './weeknd.jpg', title: 'The Weeknd Mix', subtitle: 'ZYAN & others' },
        { imageUrl: './2010mix.jpg', title: '2010s Mix', subtitle: 'Arijit Singh' },
        { imageUrl: './thanku.jpg', title: 'Thank You', subtitle: 'Lennon Stella' },
        { imageUrl: './worried.jpg', title: "I Ain't Worried", subtitle: 'OneRepublic' },
        { imageUrl: './believer.jpg', title: 'Believer', subtitle: 'Imagine Dragons' },
        { imageUrl: './minnet.jpg', title: 'Minnet Eylemem', subtitle: 'Serhat Durums' },


    ];

    const data1 = [
        { imageUrl: './believer.jpg', title: 'Believer', subtitle: 'Imagine Dragons' },
        { imageUrl: './ktmbk.jpg', title: 'KTMBK', subtitle: 'Zaeden' },
        { imageUrl: './falling.jpg', title: 'Falling', subtitle: 'Trevor Daniel' },
        { imageUrl: './minnet.jpg', title: 'Minnet Eylemem', subtitle: 'Serhat Durums' },
        { imageUrl: './imagine.jpg', title: 'Imagine', subtitle: 'John Lennon' },
        { imageUrl: './sanam.jpg', title: 'Sanam Re', subtitle: 'Mithoon, Arijit Singh' },
        { imageUrl: './numb.jpg', title: 'Numb', subtitle: 'Linkin Park' },
        { imageUrl: './kaleo.jpg', title: 'Way down We Go', subtitle: 'KALEO' },
        { imageUrl: './worried.jpg', title: "I Ain't Worried", subtitle: 'OneRepublic' },
        { imageUrl: './thanku.jpg', title: 'Thank You', subtitle: 'Lennon Stella' },
        { imageUrl: './kahaani.jpg', title: 'Kahaani', subtitle: 'Dream Note' },

        { imageUrl: './embers.jpg', title: 'Fallen Embers', subtitle: 'ILLENIUM' },
        { imageUrl: './sach.jpg', title: 'Such Keh Raha Hai', subtitle: 'KK' },
        { imageUrl: './cityofstars.jpg', title: 'City Of  Stars', subtitle: 'Ryan Gosling' },

    ];
    return (
        <div className={` overscroll-none    overflow-scroll  p-3 ${className}`}  {...props}>
            <ActionHeader onButtonClick={() => {
                setIsActivityBarOpen(!isActivityBarOpen), setIsActivityBarDrawerOpen((prev) => {
                    return !prev;
                })
            }}
                onRightIconClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
                onLeftIconClick={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            <Banner
                imagePath="./banner.png"
                title="Human"
                description="Three Days Grace"
                buttonText="LISTEN NOW"
                className='rounded-xl max-h-72 justify-between bg-light-secondary dark:bg-dark-bgNav'
            />



            <FeedRow title="Hello, Abhishek" data={data0} />
            <FeedRow title="New releases for you" data={data1} />

        </div>
    );
}

export default MainFeed;
