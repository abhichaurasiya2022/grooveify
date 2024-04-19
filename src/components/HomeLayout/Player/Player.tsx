import React, { useState } from 'react';
import TrackDetail from './TrackDetail';
import { IconHeart, IconSquareRoundedPlus } from '@tabler/icons-react';
import TrackManager from './TrackManager';
import MediaController from './MediaController';

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> { }

const Player: React.FC<PlayerProps> = ({ className, ...props }) => {

    const [sliderValue, setSliderValue] = useState<number>(50);
    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };
    return (
        <div className={`flex outline-dotted outline-1 bg-slate-200 dark:bg-gray-950 flex-row h-20 bottom-0 right-0 left-0  z-50 absolute w-full ${className}`} {...props}>


            <TrackDetail className=" relative  outline-dotted outline-1 basis-1/6" TrackName={'Take me Away'} TrackArtist={'killer'} ActionIcon1={<IconHeart stroke={1} />} ActionIcon2={<IconSquareRoundedPlus stroke={1} />} />
            <TrackManager className=" relative  outline-dotted outline-1 basis-3/5" />

            <MediaController className=" relative  outline-dotted outline-1 basis-1/4" />

        </div>
    );
}

export default Player;
