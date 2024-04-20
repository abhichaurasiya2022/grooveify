import React, { useState } from 'react';
import TrackDetail from './TrackDetail';
import { IconHeart, IconSquareRoundedPlus } from '@tabler/icons-react';
import TrackManager from './TrackManager';
import MediaController from './MediaController';
import colors from 'tailwindcss/colors';
import useTailwindScreenSize from '@/hooks/useMediaQuery';
import useMediaQuery from '@/hooks/useMediaQuery';

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> { }

const Player: React.FC<PlayerProps> = ({ className, ...props }) => {
    const isSmallScreen = useMediaQuery("(max-width: 800px)");
    const isMobileScreen = useMediaQuery("(max-width: 500px)");

    const [sliderValue, setSliderValue] = useState<number>(50);
    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };
    return (
        <div className={`flex  bg-light-bgActivity dark:bg-dark-bgActivity flex-row h-20 bottom-0 right-0 left-0  z-50 absolute w-full ${className}`} {...props}>
            {!isMobileScreen && (

                <TrackDetail className=" relative   basis-1/6" TrackName={`I Am Machine`} TrackArtist={'Three Days Grace'} ActionIcon1={<IconHeart stroke={1.5} className=' text-light-primary dark:text-dark-primary ' />} ActionIcon2={<IconSquareRoundedPlus className=' text-light-primary dark:text-dark-primary ' stroke={1.5} />} />
            )}

            <TrackManager className=" relative flex-grow  basis-3/5" />
            {!isSmallScreen && (

                <MediaController className=" relative   basis-1/4" />
            )}

        </div>
    );
}

export default Player;
