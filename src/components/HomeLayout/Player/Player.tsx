import React, { useState } from 'react';
import TrackDetail from './TrackDetail';
import { IconHeart, IconSquareRoundedPlus } from '@tabler/icons-react';
import TrackManager from './TrackManager';
import MediaController from './MediaController';
import colors from 'tailwindcss/colors';

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> { }

const Player: React.FC<PlayerProps> = ({ className, ...props }) => {

    const [sliderValue, setSliderValue] = useState<number>(50);
    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };
    return (
        <div className={`flex  bg-light-bgActivity dark:bg-dark-bgActivity flex-row h-20 bottom-0 right-0 left-0  z-50 absolute w-full ${className}`} {...props}>


            <TrackDetail className=" relative   basis-1/6" TrackName={'Take me Away'} TrackArtist={'killer'} ActionIcon1={<IconHeart stroke={1.5} className=' text-light-primary dark:text-dark-primary ' />} ActionIcon2={<IconSquareRoundedPlus className=' text-light-primary dark:text-dark-primary ' stroke={1.5} />} />
            <TrackManager className=" relative   basis-3/5" />

            <MediaController className=" relative   basis-1/4" />

        </div>
    );
}

export default Player;
