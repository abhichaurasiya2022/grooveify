import React, { useState } from 'react';
import TrackSlider from './TrackSlider';
import { IconArrowsShuffle2, IconMusicPause, IconPlayerPause, IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward, IconRepeat } from '@tabler/icons-react';

interface TrackManagerProps extends React.HTMLAttributes<HTMLDivElement> { }

const TrackController = () => {

    const [track, setTrack] = useState(false);

    return (
        <div>
            <button className="rounded-full p-2  text-light-primary dark:text-dark-primary ">
                <IconArrowsShuffle2 stroke={1.5} className="h-6 w-6" />
            </button>
            <button className="rounded-full p-2  text-light-primary dark:text-dark-primary ">
                <IconPlayerSkipBack stroke={1.5} className="h-6 w-6" />
            </button>
            <button onClick={() => setTrack((prev) => {
                return !prev
            })} className="rounded-full p-2  text-light-primary dark:text-dark-primary ">
                {track ? <IconPlayerPause stroke={1.5} /> : <IconPlayerPlay stroke={1.5} />}
            </button>
            <button className="rounded-full p-2  text-light-primary dark:text-dark-primary ">
                <IconPlayerSkipForward stroke={1.5} className="h-6 w-6" />
            </button>
            <button className="rounded-full p-2  text-light-primary dark:text-dark-primary ">
                <IconRepeat stroke={1.5} className="h-6 w-6" />
            </button>
        </div>
    )
}

const TrackManager: React.FC<TrackManagerProps> = ({ className }) => {
    const [sliderValue, setSliderValue] = useState<number>(50);
    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };

    return (
        <div className={`${className} flex justify-center flex-col items-center space-x-4`}>
            <TrackController />
            <TrackSlider className='py-2' value={sliderValue} onChange={handleSliderChange} />
        </div>
    );
};

export default TrackManager;
