import { IconSearch } from '@tabler/icons-react';
import React from 'react';

interface SearchBarProps {
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...' }) => {
    return (
        <div className="relative w-full flex-1 grow flex">
            <div className="absolute left-0 top-0 flex items-center h-full pl-3">
                <IconSearch stroke={1} className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full pl-10 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
    );
}

export default SearchBar;
