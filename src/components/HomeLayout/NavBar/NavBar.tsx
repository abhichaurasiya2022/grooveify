import { IconButton } from '@/components/Buttons/Buttons';
import React from 'react';
import { IconLayoutSidebarRightExpand, IconVinyl } from '@tabler/icons-react';
import ActionHeader from './ActionHeader';
import Features from './Features';
import Library from './Library';
import { motion } from "framer-motion"
interface NavbarProps extends React.HTMLProps<HTMLDivElement> {
    setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSideBarOpen: boolean,
    isSideBarDrawerOpen: boolean,
    setIsSideBarDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface OpenPage {
    Home: 'home',
    Discover: 'discover',
    Collection: 'collection',
    Download: 'download',
    Favorites: 'favorites',
    Local: 'local',


}
const Navbar: React.FC<NavbarProps> = ({ className, setIsSideBarOpen, isSideBarOpen, isSideBarDrawerOpen, setIsSideBarDrawerOpen, ...props }) => {

    return (
        <nav className={`overscroll-none overflow-scroll flex flex-col ${className} `}  {...props}>
            <ActionHeader className='px-3' isSideBarOpen={isSideBarOpen} onLeftIconClick={() => { }} leftIcon={isSideBarOpen ? <IconVinyl className=' text-light-primary dark:text-dark-primary ' stroke={3} /> : undefined} rightIcon={<IconLayoutSidebarRightExpand className=' text-light-primary dark:text-dark-primary ' stroke={1.5} />} onButtonClick={() => setIsSideBarOpen((prev) => {
                return !prev;
            })} />

            <Features className='px-3' isSideBarDrawerOpen={isSideBarDrawerOpen} setIsSideBarDrawerOpen={setIsSideBarDrawerOpen} isSideBarOpen={isSideBarOpen} />
            <Library className='px-3' isSideBarDrawerOpen={isSideBarDrawerOpen} setIsSideBarDrawerOpen={setIsSideBarDrawerOpen} isSideBarOpen={isSideBarOpen} />
            <div className={`w-full flex self-end justify-start items-center`}>
                <img src={'./human.jpg'} alt="Card Image" className=" object-cover rounded-xs" />
            </div>

        </nav>);
}

export default Navbar;
