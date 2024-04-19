interface BannerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    imagePath: string;
    title: string;
    description: string;
    buttonText: string;

}

export const Banner: React.FC<BannerProps> = ({ className, imagePath, title, description, buttonText }) => {
    return (
        <div className={`${className}  relative overflow-clip bg-white flex items-center`}>
            <div className="w-full lg:w-1/3 flex flex-grow flex-col justify-center p-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                    <div className=" font-light text-xs text-gray-950">New Album</div>

                    <h1 className="text-sm font-bold tracking-tight text-gray-900 sm:text-xl">
                        {title}
                    </h1>
                    <p className="mt-2 text-xl text-gray-500">
                        {description}
                    </p>
                </div>
                <div className="mt-8">
                    <button className="px-2 py-1 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
                        {buttonText}
                    </button>
                </div>
            </div>

            <div className="hidden lg:block w-1/2 relative">
                <img
                    src={imagePath}
                    alt=""
                    className="relative object-scale-down"
                />
            </div>
        </div>
    )
}
