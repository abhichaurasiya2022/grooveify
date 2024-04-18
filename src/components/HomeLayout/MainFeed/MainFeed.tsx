import React from 'react';

interface MainFeedProps extends React.HTMLAttributes<HTMLDivElement> { }

const MainFeed: React.FC<MainFeedProps> = ({ ...props }) => {
    return (
        <div {...props}>
            MainFeed
        </div>
    );
}

export default MainFeed;
