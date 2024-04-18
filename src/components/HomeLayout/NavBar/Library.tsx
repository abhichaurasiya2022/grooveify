import { IconButton } from '@/components/Buttons/Buttons';
import { IconBrandSafari, IconDownload, IconFile, IconFolder, IconHeart, IconHome, IconPlaylist } from '@tabler/icons-react';
import React from 'react';

interface LibraryProps { }

const Library: React.FC<LibraryProps> = () => {
    return (
        <div className="flex flex-col py-3">
            <div className="mx-1 font-light text-xs text-gray-950">LIBRARY</div>
            <div className="flex flex-col flex-1">
                <IconButton leftIcon={<IconDownload />} label="Download" />
                <IconButton leftIcon={<IconHeart />} label="Favorites" />
                <IconButton leftIcon={<IconFolder />} label="Local Files" />
            </div>
        </div>
    );
}

export default Library;
