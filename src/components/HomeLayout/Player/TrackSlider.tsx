import React from 'react';

interface TrackSliderProps {
    value: number;
    onChange: (value: number) => void;
    className?: string;
}

const TrackSlider: React.FC<TrackSliderProps> = ({ className, value, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(parseFloat(event.target.value));
    };

    return (
        <>
            <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={handleChange}
                style={{ minWidth: '75%', height: '7px' }}
                className={`${className} px-1 rounded-lg appearance-auto bg-blue-400`}
            />
        </>
    );
};

export default TrackSlider;
