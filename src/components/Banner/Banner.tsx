interface BannerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    imagePath: string;
    title: string;
    description: string;
    buttonText: string;

}

export const Banner: React.FC<BannerProps> = ({ className, imagePath, title, description, buttonText }) => {
    return (
        <div className={`${className} text-light-primary dark:text-dark-primary relative overflow-clip  flex items-center`}>
            <div className="z-10  w-full h-full lg:w-1/2 flex flex-grow flex-col justify-between lg:justify-center p-0 absolute sm:static sm:px-6 lg:px-2">
                <div className="flex w-full flex-grow flex-col xs:pt-5 sm:pt-6 lg:p-0 sm:max-w-lg">
                    <div className="flex flex-grow p-4 flex-col ">

                        <div className=" font-medium text-xs ">New Album</div>

                        <h1 className="text-xs font-bold tracking-tight  sm:text-xl">
                            {title}
                        </h1>
                    </div>
                    <div className="flex w-full p-4 self-stretch flex-col relative space-y-2">
                        <div className="mt-2 text-xl">
                            {description}
                        </div>
                        <button className="px-2 py-1 w-fit text-light-primary dark:text-dark-primary bg-light-accent dark:bg-dark-accent rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
                            {buttonText}
                        </button>
                        <div className="sm:hidden backdrop-opacity-40 -z-10 absolute inset-0 bg-gradient-to-b  dark:from-dark-bgMain dark:via-dark-bgMain from-light-bgMain via-light-bgBody  dark:to-dark-bgNav to-light-bgActivity backdrop-blur-3xl rounded-lg"></div>
                    </div>


                </div>
            </div>

            <div className="mb-14 lg:mb-0 sm:m-0 h-full flex self-end flex-grow sm:[block w-1/2] relative">
                <img
                    src={imagePath}
                    alt=""
                    className="relative h-full object-cover"
                />
            </div>
        </div>
    )
}
