import { IconButton } from '@/components/Buttons/Buttons';
import React from 'react';
import { IconLayoutSidebarRightExpand, IconVinyl } from '@tabler/icons-react';
import ActionHeader from './ActionHeader';
import Features from './Features';
import Library from './Library';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavbarProps extends React.HTMLProps<HTMLDivElement> {
    setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSideBarOpen: boolean,
    isSideBarDrawerOpen: boolean,
    setIsSideBarDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isMediumScreen: boolean

}
export interface OpenPage {
    Home: 'home',
    Discover: 'discover',
    Collection: 'collection',
    Download: 'download',
    Favorites: 'favorites',
    Local: 'local',


}
const MobileNav: React.FC<NavbarProps> = ({ className, setIsSideBarOpen, isSideBarOpen, isSideBarDrawerOpen, setIsSideBarDrawerOpen, isMediumScreen, ...props }) => {

    return (
        <nav className={` flex flex-col  overscroll-none overflow-scroll  ${className} p-3`}  {...props}>
            <ActionHeader isMediumScreen={isMediumScreen} isSideBarOpen={false} leftIcon={<IconVinyl className=' text-light-primary dark:text-dark-primary ' stroke={3} />} onButtonClick={() => setIsSideBarOpen((prev) => {
                return !prev;
            })} />
            <div className='flex flex-col items-center content-center flex-grow'>

                <Features isSideBarDrawerOpen={isSideBarDrawerOpen} setIsSideBarDrawerOpen={setIsSideBarDrawerOpen} isSideBarOpen={false} />
                <Library isSideBarDrawerOpen={isSideBarDrawerOpen} setIsSideBarDrawerOpen={setIsSideBarDrawerOpen} isSideBarOpen={false} />
            </div>

            {isMediumScreen && (
                <ThemeToggle className='py-2' />
            )}

        </nav>
    );
}

export default MobileNav;
