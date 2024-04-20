import { useEffect, useState } from "react"
import ActivitySection from "./ActivitySection/ActivitySection"
import MainFeed from "./MainFeed/MainFeed"
import Navbar from "./NavBar/NavBar"
import Player from "./Player/Player"
import Drawer from "../Drawer/Drawer"
import useMediaQuery from "@/hooks/useMediaQuery"
import MobileNavbar from "./NavBar/MobileNavBar"


import { motion } from "framer-motion"



const HomeLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [isActivityBarOpen, setIsActivityBarOpen] = useState(true);
    const [isSideBarDrawerOpen, setIsSideBarDrawerOpen] = useState(false);
    const [isActivityBarDrawerOpen, setIsActivityBarDrawerOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const isMediumScreen = useMediaQuery("(max-width: 900px)");

    const Nav = <Navbar isSideBarDrawerOpen={isSideBarDrawerOpen} setIsSideBarDrawerOpen={setIsSideBarDrawerOpen} setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} className={`${isSideBarOpen ? 'basis-1/6' : ''} pb-20 bg-light-bgNav dark:bg-dark-bgNav `} />


    return (
        <>
            <Player />
            <div className="flex flex-row flex-grow w-dvw h-dvh">
                {isMediumScreen && (
                    <>
                        <MobileNavbar isSideBarDrawerOpen={isSideBarDrawerOpen} setIsSideBarDrawerOpen={setIsSideBarDrawerOpen} setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} isMediumScreen={isMediumScreen} className={`pb-20 bg-light-bgNav dark:bg-dark-bgNav `} />

                    </>

                )}
                {isMediumScreen === false &&

                    (
                        <>
                            {console.log('hello')}
                            {Nav}
                        </>
                    )
                }
                <MainFeed isActivityBarOpen={isActivityBarOpen} setIsActivityBarOpen={setIsActivityBarOpen} setIsActivityBarDrawerOpen={setIsActivityBarDrawerOpen} className="pb-20 flex-grow basis-3/5 bg-light-bgMain dark:bg-dark-bgMain" />
                {isMediumScreen && (
                    <>
                        <Drawer width="full" side="right" isOpen={isActivityBarDrawerOpen} setIsOpen={setIsActivityBarDrawerOpen} >
                            <ActivitySection className={`pt-10 pb-20 flex flex-col flex-1 bg-light-bgActivity dark:bg-dark-bgActivity`} />
                        </Drawer>
                    </>

                )}
                {isMediumScreen === false &&

                    (
                        <>
                            <ActivitySection className={` ${isActivityBarOpen ? '' : 'hidden'} pt-4 pb-20 basis-1/4 bg-light-bgActivity dark:bg-dark-bgActivity`} />

                        </>
                    )
                }



            </div>
        </>
    )
}

export default HomeLayout;