import { IconButton } from '@/components/Buttons/Buttons';
import React from 'react';
import { IconLayoutSidebarRightExpand, IconVinyl } from '@tabler/icons-react';
import ActionHeader from './ActionHeader';
import Features from './Features';
import Library from './Library';

interface NavbarProps extends React.HTMLProps<HTMLDivElement> {
    setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSideBarOpen: boolean,
}
export interface OpenPage {
    Home: 'home',
    Discover: 'discover',
    Collection: 'collection',
    Download: 'download',
    Favorites: 'favorites',
    Local: 'local',


}
const Navbar: React.FC<NavbarProps> = ({ className, setIsSideBarOpen, isSideBarOpen, ...props }) => {

    return (
        <nav className={`  overscroll-none overflow-scroll  ${className} p-3`}  {...props}>
            <ActionHeader onLeftIconClick={() => { }} leftIcon={isSideBarOpen ? <IconVinyl className=' text-light-primary dark:text-dark-primary ' stroke={3} /> : undefined} rightIcon={<IconLayoutSidebarRightExpand className=' text-light-primary dark:text-dark-primary ' stroke={1.5} />} onButtonClick={() => setIsSideBarOpen((prev) => {
                return !prev;
            })} />
            {
                isSideBarOpen && (
                    <>
                        <Features />
                        <Library />
                    </>
                )
            }

        </nav>
    );
}

export default Navbar;
