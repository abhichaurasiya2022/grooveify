import React from 'react';

interface ActivitySectionProps extends React.HTMLAttributes<HTMLDivElement> { }

const ActivitySection: React.FC<ActivitySectionProps> = ({ ...props }) => {
    return (
        <div {...props}>
            ActivitySection
        </div>
    );
}

export default ActivitySection;
