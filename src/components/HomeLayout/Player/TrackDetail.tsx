import React from 'react';

interface TrackDetailProps extends React.HTMLAttributes<HTMLDivElement> {
    TrackName: string;
    TrackArtist: string;
    ActionIcon1: React.ReactNode;
    ActionIcon2: React.ReactNode;
}

const TrackDetail: React.FC<TrackDetailProps> = ({ className, TrackName, TrackArtist, ActionIcon1, ActionIcon2 }) => {
    return (
        <div className={`${className} content-center space-x-3 p-2 flex justify-between`}>
            <div className="flex text-clip flex-grow self-center text-xs text-nowrap flex-col">
                <div className='font-bold'>{TrackName}</div>
                <div className='text-clip'>{TrackArtist}</div>
            </div>
            <div className="flex self-center ">
                {ActionIcon1}
                {ActionIcon2}
            </div>
        </div>
    );
};

export default TrackDetail;
