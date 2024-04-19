import React, { useState } from 'react';
import TrackSlider from './TrackSlider';
import { IconArrowsShuffle2, IconDevices, IconMicrophone, IconMusicPause, IconPlayerPause, IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward, IconRepeat, IconShare, IconVolume } from '@tabler/icons-react';

interface MediaControllerProps extends React.HTMLAttributes<HTMLDivElement> { }

const TrackController = () => {

    const [track, setTrack] = useState(false);

    return (
        <div>
            <button className="rounded-full p-2 bg-gray-200 hover:bg-gray-300">
                <IconArrowsShuffle2 className="h-6 w-6" />
            </button>
            <button className="rounded-full p-2 bg-gray-200 hover:bg-gray-300">
                <IconPlayerSkipBack className="h-6 w-6" />
            </button>
            <button onClick={() => setTrack((prev) => {
                return !prev
            })} className="rounded-full p-2 bg-gray-200 hover:bg-gray-300">
                {track ? <IconPlayerPause /> : <IconPlayerPlay />}
            </button>
            <button className="rounded-full p-2 bg-gray-200 hover:bg-gray-300">
                <IconPlayerSkipForward className="h-6 w-6" />
            </button>
            <button className="rounded-full p-2 bg-gray-200 hover:bg-gray-300">
                <IconRepeat className="h-6 w-6" />
            </button>
        </div>
    )
}

const MediaController: React.FC<MediaControllerProps> = ({ className }) => {
    const [sliderValue, setSliderValue] = useState<number>(50);
    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };

    return (
        <div className={`${className} flex justify-center flex-row items-center px-5 space-x-2`}>
            <div className='flex  flex-row content-center items-center'>
                <IconVolume />
                <TrackSlider value={sliderValue} onChange={handleSliderChange} />
            </div>
            <IconMicrophone />
            <IconDevices />
            <IconShare />
        </div>
    );
};

export default MediaController;
