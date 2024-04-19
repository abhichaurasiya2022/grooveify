import React from 'react';

interface ActionHeaderProps {
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onButtonClick: () => void;
    onLeftIconClick: () => void;

}

const ActionHeader: React.FC<ActionHeaderProps> = ({ leftIcon, rightIcon, onLeftIconClick, onButtonClick }) => {
    return (
        <div className="flex py-2 items-center justify-between w-full">
            <div onClick={onLeftIconClick} className="flex p-1 items-center justify-start cursor-pointer ">{leftIcon}</div>
            <div className="flex items-center justify-end flex-1">
                <button onClick={onButtonClick} className="flex items-center justify-center  rounded-md shadow-sm text-sm font-medium text-black bg-transparent focus:outline-none ">
                    {rightIcon}
                </button>
            </div>
        </div>
    );
}

export default ActionHeader;
