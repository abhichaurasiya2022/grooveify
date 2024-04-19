import React from 'react';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import { IconDots } from '@tabler/icons-react';

interface ActionHeaderProps {
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onButtonClick: () => void;
    onLeftIconClick: () => void;
}

const ActionHeader: React.FC<ActionHeaderProps> = ({ leftIcon, rightIcon, onLeftIconClick, onButtonClick }) => {
    return (
        <div className=" flex py-3  w-full">
            <Pagination className='p-3' onPrevClick={function (): void {
                throw new Error('Function not implemented.');
            }} onNextClick={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <SearchBar />
            <div className="p-3"><IconDots /></div>

        </div>
    );
}

export default ActionHeader;
