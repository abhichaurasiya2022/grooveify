import { IconButton } from '@/components/Buttons/Buttons';
import { IconBrandSafari, IconHome, IconHomeFilled, IconPlaylist } from '@tabler/icons-react';
import React, { useState } from 'react';
interface FeaturesProps extends React.HTMLProps<HTMLDivElement> {
    isSideBarOpen: Boolean,
    isSideBarDrawerOpen: boolean,
    setIsSideBarDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;

}
type ActivePage = {
    Home: 'home',
    Discover: 'discover',
    Collection: 'collection',
    Download: 'download',
    Favorites: 'favorites',
    Local: 'local',


}

const Features: React.FC<FeaturesProps> = ({ className, isSideBarOpen, isSideBarDrawerOpen, setIsSideBarDrawerOpen }) => {
    const [isSelected, setIsSelected] = useState<string>('home');
    return (
        <div className={`${className} flex flex-col py-3`}>
            {isSideBarOpen && (

                <div className="mx-1 font-light text-xs  text-light-primary dark:text-dark-primary">FEATURES</div>
            )}
            <div className="flex  flex-col flex-1">
                <IconButton className={isSelected == 'home' ? 'text-light-accent dark:text-dark-accent' : ''} leftIcon={isSelected == 'home' ? <IconHomeFilled stroke={1.5} /> : <IconHome stroke={1.5} />} label={isSideBarOpen ? "Home" : ""} />
                <IconButton leftIcon={<IconBrandSafari stroke={1.5} />} label={isSideBarOpen ? "Discover" : ""} />
                <IconButton leftIcon={<IconPlaylist stroke={1.5} />} label={isSideBarOpen ? "Collection" : ""} />
            </div>
        </div>
    );
}

export default Features;
