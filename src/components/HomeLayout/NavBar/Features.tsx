import { IconButton } from '@/components/Buttons/Buttons';
import { IconBrandSafari, IconHome, IconPlaylist } from '@tabler/icons-react';
import React from 'react';

interface FeaturesProps { }

const Features: React.FC<FeaturesProps> = () => {
    return (
        <div className="flex flex-col py-3">
            <div className="mx-1 font-light text-xs text-gray-950">FEATURES</div>
            <div className="flex flex-col flex-1">
                <IconButton leftIcon={<IconHome />} label="Home" />
                <IconButton leftIcon={<IconBrandSafari />} label="Discover" />
                <IconButton leftIcon={<IconPlaylist />} label="Collection" />
            </div>
        </div>
    );
}

export default Features;
