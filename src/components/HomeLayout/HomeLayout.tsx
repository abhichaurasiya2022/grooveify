import ActivitySection from "./ActivitySection/ActivitySection"
import MainFeed from "./MainFeed/MainFeed"
import Navbar from "./NavBar/NavBar"
import Player from "./Player/Player"





const HomeLayout = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <div className="flex w-full flex-row flex-1" >
                <Navbar className="border-4 border-cyan-900 basis-1/6" />
                <MainFeed className="border-4 border-cyan-900 basis-3/5" />
                <ActivitySection className="border-4 border-cyan-900 basis-1/4" />
            </div>
            <Player className="flex border-4 border-cyan-900  bottom-0 left-0 w-full" />
        </div>
    )
}

export default HomeLayout;