import React from 'react';

interface TrackDetailProps extends React.HTMLAttributes<HTMLDivElement> {
    TrackName: string;
    TrackArtist: string;
    ActionIcon1: React.ReactNode;
    ActionIcon2: React.ReactNode;
}

const TrackDetail: React.FC<TrackDetailProps> = ({ className, TrackName, TrackArtist, ActionIcon1, ActionIcon2 }) => {
    return (
        <div className={`${className} content-center space-x-3 p-2 flex justify-left`}>

            <div className="flex text-clip  self-center text-xs text-nowrap flex-col">
                <div className='font-semibold text-light-primary dark:text-dark-primary'>{TrackName}</div>
                <div className='text-clip text-light-secondary dark:text-dark-secondary'>{TrackArtist}</div>
            </div>
            <div className="flex self-center ">
                {ActionIcon1}
                {ActionIcon2}
            </div>
        </div>
    );
};

export default TrackDetail;
