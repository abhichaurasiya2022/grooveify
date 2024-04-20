import { IconButton } from '@/components/Buttons/Buttons';
import { IconBrandSafari, IconDownload, IconFile, IconFolder, IconHeart, IconHome, IconPlaylist } from '@tabler/icons-react';
import React from 'react';

interface LibraryProps extends React.HTMLProps<HTMLDivElement> {
    isSideBarOpen?: Boolean
    isSideBarDrawerOpen?: boolean,
    setIsSideBarDrawerOpen?: React.Dispatch<React.SetStateAction<boolean>>;

}

const Library: React.FC<LibraryProps> = ({ className, isSideBarOpen, isSideBarDrawerOpen, setIsSideBarDrawerOpen }) => {
    return (
        <div className={`${className} flex flex-grow flex-col py-3`}>
            {isSideBarOpen && (

                <div className="mx-1 font-light text-xs text-light-primary dark:text-dark-primary">LIBRARY</div>
            )}
            <div className="flex flex-col flex-1">
                <IconButton leftIcon={<IconDownload />} label={isSideBarOpen ? "Download" : ""} />
                <IconButton leftIcon={<IconHeart />} label={isSideBarOpen ? "Favorites" : ""} />
                <IconButton leftIcon={<IconFolder />} label={isSideBarOpen ? "Local Files" : ""} />
            </div>
        </div>

    );
}

export default Library;
