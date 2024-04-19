import React from 'react';
import Pagination from './Pagination';
import ActionHeader from './ActionHeader';
import { Banner } from '@/components/Banner/Banner';
import Card from '@/components/Card/Card';
import FeedRow from './FeedContent/FeedRow';

interface MainFeedProps extends React.HTMLAttributes<HTMLDivElement> {
    isActivityBarOpen: boolean;
    setIsActivityBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MainFeed: React.FC<MainFeedProps> = ({ isActivityBarOpen, setIsActivityBarOpen, className, ...props }) => {
    const data = [
        { imageUrl: './banner.png', title: 'Title 1', subtitle: 'Subtitle 1' },
        { imageUrl: './banner.png', title: 'Title 2', subtitle: 'Subtitle 2' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },

        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        { imageUrl: './banner.png', title: 'Title 3', subtitle: 'Subtitle 3' },
        // // Add more data items as needed
    ];
    return (
        <div className={` overscroll-none    overflow-scroll  p-3 ${className}`}  {...props}>
            <ActionHeader onButtonClick={() => setIsActivityBarOpen((prev) => {
                return !prev
            })}
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
                className='rounded-xl max-h-72 justify-between bg-light-secondary dark:bg-dark-secondbg-light-secondary'
            />



            <FeedRow title="Feed Row 1" data={data} />
            <FeedRow title="Feed Row 1" data={data} />

        </div>
    );
}

export default MainFeed;
