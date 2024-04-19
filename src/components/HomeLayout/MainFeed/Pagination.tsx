



import React from 'react';

interface PaginationProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onPrevClick: () => void;
    onNextClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ className, onPrevClick, onNextClick }) => {
    return (
        <div className={`${className} text-gray-700 dark:text-gray-100 flex justify-center`}>
            <button onClick={onPrevClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button onClick={onNextClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}

export default Pagination;
