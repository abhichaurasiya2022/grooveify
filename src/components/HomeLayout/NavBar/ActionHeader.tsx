import React from 'react';

interface ActionHeaderProps extends React.HTMLProps<HTMLDivElement> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onButtonClick?: () => void;
    onLeftIconClick?: () => void;
    isSideBarOpen: boolean
    isMediumScreen?: boolean
}

const ActionHeader: React.FC<ActionHeaderProps> = ({ className, leftIcon, rightIcon, onLeftIconClick, onButtonClick, isSideBarOpen, isMediumScreen }) => {

    return (
        <div className={`flex py-2 ${className} ${isSideBarOpen ? 'justify-between' : 'justify-center'} justify-center w-full`}>
            {isSideBarOpen && (

                <div onClick={onLeftIconClick} className="flex p-1 items-center justify-start cursor-pointer ">{leftIcon}</div>
            )}
            {
                isMediumScreen && (
                    <div onClick={onLeftIconClick} className="flex p-1 items-center justify-start cursor-pointer ">{leftIcon}</div>

                )
            }
            <div className={`flex items-center   `}>
                <button onClick={onButtonClick} className="flex items-center justify-center  rounded-md shadow-sm text-sm font-medium text-black bg-transparent focus:outline-none ">
                    {rightIcon}
                </button>
            </div>
        </div>
    );
}

export default ActionHeader;
