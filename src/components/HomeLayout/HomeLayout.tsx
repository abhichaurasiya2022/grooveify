import ActivitySection from "./ActivitySection/ActivitySection"
import MainFeed from "./MainFeed/MainFeed"
import Navbar from "./NavBar/NavBar"
import Player from "./Player/Player"





const HomeLayout = () => {
    return (
        <>
            <Player />
            <div className="flex flex-col w-dvw h-dvh">
                <div className="flex w-dvw h-dvh flex-row flex-grow">

                    <Navbar className="pb-20 basis-1/6" />
                    <MainFeed className="pb-20 basis-3/5" />
                    <ActivitySection className="pt-4 pb-20 basis-1/4" />
                </div>
            </div>
        </>
    )
}

export default HomeLayout;