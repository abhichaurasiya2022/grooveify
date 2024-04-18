import { IconButton } from '@/components/Buttons/Buttons';
import React from 'react';
import { IconLayoutSidebarRightExpand, IconVinyl } from '@tabler/icons-react';
import ActionHeader from './ActionHeader';
import Features from './Features';
import Library from './Library';

interface NavbarProps extends React.HTMLProps<HTMLDivElement> { }

const Navbar: React.FC<NavbarProps> = ({ className, ...props }) => {
    return (
        <nav className={` ${className} p-3`}  {...props}>
            <ActionHeader onLeftIconClick={() => { }} leftIcon={<IconVinyl />} rightIcon={<IconLayoutSidebarRightExpand />} onButtonClick={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <Features />
            <Library />
            {/* <IconButton leftIcon={<IconVinyl />} label={'Abhi'} /> */}
        </nav>
    );
}

export default Navbar;
