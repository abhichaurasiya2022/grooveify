import { useState } from "react"
import ActivitySection from "./ActivitySection/ActivitySection"
import MainFeed from "./MainFeed/MainFeed"
import Navbar from "./NavBar/NavBar"
import Player from "./Player/Player"





const HomeLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [isActivityBarOpen, setIsActivityBarOpen] = useState(true);
    return (
        <>
            <Player />
            <div className="flex flex-row flex-grow w-dvw h-dvh">

                <Navbar setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} className={`${isSideBarOpen ? 'basis-1/6' : ''} pb-20 bg-light-bgNav dark:bg-dark-bgNav `} />
                <MainFeed isActivityBarOpen={isActivityBarOpen} setIsActivityBarOpen={setIsActivityBarOpen} className="pb-20 flex-grow basis-3/5 bg-light-bgMain dark:bg-dark-bgMain" />
                <ActivitySection className={`${isActivityBarOpen ? '' : 'hidden'} pt-4 pb-20 basis-1/4 bg-light-bgActivity dark:bg-dark-bgActivity`} />

            </div>
        </>
    )
}

export default HomeLayout;