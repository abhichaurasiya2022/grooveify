import React, { useState } from 'react';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import { IconDots, IconLayoutSidebarRightCollapse } from '@tabler/icons-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useMediaQueryContext } from '@/utils/MediaQueryProvider';

interface ActionHeaderProps {
    onButtonClick: () => void;
    onRightIconClick: () => void;
    onLeftIconClick: () => void;
}
let settings = [
    {
        value: 'light',
        label: 'Light',
        icon: IconDots,
    },
    {
        value: 'dark',
        label: 'Dark',
        icon: IconDots,
    },
    {
        value: 'system',
        label: 'System',
        icon: IconDots,
    },
]
const ActionHeader: React.FC<ActionHeaderProps> = ({ onRightIconClick, onLeftIconClick, onButtonClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isMediumScreen } = useMediaQueryContext();

    return (
        <div className=" flex py-3  w-full">
            <Pagination className='p-3 text-light-primary dark:text-dark-primary' onPrevClick={onLeftIconClick} onNextClick={onRightIconClick} />
            <SearchBar />
            <div className="relative text-light-primary dark:text-dark-primary">
                <div className="p-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <IconDots />
                </div>
                {isOpen && (
                    <div className="z-50 absolute right-0 mt-1 bg-light-bgActivity dark:bg-dark-bgActivity text-light-primary dark:text-dark-primary rounded shadow-lg">
                        <button onClick={() => { onButtonClick(), setIsOpen(!isOpen) }} className="py-2 px-2 cursor-pointer flex items-center" >
                            <IconLayoutSidebarRightCollapse className="mr-2" /> Activity
                        </button>

                    </div>
                )}

            </div>
            {
                isMediumScreen == false && (

                    <ThemeToggle />
                )
            }
        </div >
    );
}

export default ActionHeader;
