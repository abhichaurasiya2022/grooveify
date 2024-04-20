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
                className={`${className}  rounded-lg appearance-auto text-light-accent dark:text-dark-accent bg-light-accent dark:bg-dark-accent`}
            />
        </>
    );
};

export default TrackSlider;
