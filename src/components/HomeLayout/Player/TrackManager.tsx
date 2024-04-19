import React, { useState } from 'react';
import TrackSlider from './TrackSlider';
import { IconArrowsShuffle2, IconMusicPause, IconPlayerPause, IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward, IconRepeat } from '@tabler/icons-react';

interface TrackManagerProps extends React.HTMLAttributes<HTMLDivElement> { }

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

const TrackManager: React.FC<TrackManagerProps> = ({ className }) => {
    const [sliderValue, setSliderValue] = useState<number>(50);
    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };

    return (
        <div className={`${className} flex justify-center flex-col items-center space-x-4`}>
            <TrackController />
            <TrackSlider value={sliderValue} onChange={handleSliderChange} />
        </div>
    );
};

export default TrackManager;
