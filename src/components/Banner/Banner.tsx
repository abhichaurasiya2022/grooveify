interface BannerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    imagePath: string;
    title: string;
    description: string;
    buttonText: string;

}

export const Banner: React.FC<BannerProps> = ({ className, imagePath, title, description, buttonText }) => {
    return (
        <div className={`${className} text-light-primary dark:text-dark-primary relative overflow-clip  flex items-center`}>
            <div className="w-full lg:w-1/3 flex flex-grow flex-col justify-center p-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                    <div className=" font-medium text-xs ">New Album</div>

                    <h1 className="text-sm font-bold tracking-tight  sm:text-xl">
                        {title}
                    </h1>
                    <p className="mt-2 text-xl ">
                        {description}
                    </p>
                </div>
                <div className="mt-8">
                    <button className="px-2 py-1 text-light-primary dark:text-dark-primary bg-light-accent dark:bg-dark-accent rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
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
