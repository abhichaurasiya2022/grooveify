import React, { useState } from 'react';
import TrackSlider from './TrackSlider';
import { IconArrowsShuffle2, IconDevices, IconMicrophone, IconMusicPause, IconPlayerPause, IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward, IconRepeat, IconShare, IconVolume } from '@tabler/icons-react';

interface MediaControllerProps extends React.HTMLAttributes<HTMLDivElement> { }



const MediaController: React.FC<MediaControllerProps> = ({ className }) => {
    const [sliderValue, setSliderValue] = useState<number>(50);
    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };

    return (
        <div className={`${className} flex justify-center flex-row items-center px-5 space-x-2`}>
            <div className='flex  flex-row content-center items-center'>
                <IconVolume className=' text-light-primary dark:text-dark-primary ' stroke={1.25} />
                <TrackSlider value={sliderValue} onChange={handleSliderChange} />
            </div>
            <IconMicrophone className=' text-light-primary dark:text-dark-primary ' stroke={1.25} />
            <IconDevices className=' text-light-primary dark:text-dark-primary ' stroke={1.25} />
            <IconShare className=' text-light-primary dark:text-dark-primary ' stroke={1.25} />
        </div>
    );
};

export default MediaController;
