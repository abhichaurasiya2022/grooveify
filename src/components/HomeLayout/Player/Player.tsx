import React from 'react';

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> { }

const Player: React.FC<PlayerProps> = ({ className, ...props }) => {
    return (
        <div className={` ${className}`} {...props}>
            Player
        </div>
    );
}

export default Player;
