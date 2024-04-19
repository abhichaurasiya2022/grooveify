import React from 'react';

interface UserProps {
    avatarUrl: string;
    name: string;
    icon1: React.ReactNode;
    icon2: React.ReactNode;
}

const User: React.FC<UserProps> = ({ avatarUrl, name, icon1, icon2 }) => {
    return (
        <div className="flex items-center bg-transparent justify-between rounded-lg  p-3">
            {/* Avatar */}
            <div className="flex flex-row content-center items-center space-x-4">
                <img src={avatarUrl} alt="User Avatar" className="h-10 w-10 object-cover rounded-full" />
                {/* User Info */}
                <p className="text-md font-semibold">{name}</p>
                {/* Icons */}
            </div>
            <div className="flex items-center space-x-1 ">
                {icon1}
                {icon2}
            </div>
        </div>
    );
};

export default User;
