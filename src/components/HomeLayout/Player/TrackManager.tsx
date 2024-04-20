import React, { useEffect, useState } from 'react';
import TrackSlider from './TrackSlider';
import { IconArrowsShuffle2, IconMusicPause, IconPlayerPause, IconPlayerPauseFilled, IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward, IconRepeat } from '@tabler/icons-react';
import { stagger, useAnimate } from 'framer-motion';
import { useMediaQueryContext } from '@/utils/MediaQueryProvider';

interface TrackManagerProps extends React.HTMLAttributes<HTMLDivElement> { }
function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations: any = isOpen
            ? [
                [
                    "nav",
                    { transform: "translateX(0%)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ]
            ]
            : [
                [
                    "li",
                    { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
                    { delay: stagger(0.05, { from: "last" }), at: "<" }
                ],
                ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
            ];

        animate([
            [
                "path.top",
                { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
                { at: "<" }
            ],
            ...menuAnimations
        ]);
    }, [isOpen]);

    return scope;
}
const TrackController = () => {

    const [track, setTrack] = useState(false);
    const scope = useMenuAnimation(track);

    return (
        <div >
            <button className="rounded-full p-2  text-light-primary dark:text-dark-primary ">
                <IconArrowsShuffle2 stroke={1.5} className="h-6 w-6" />
            </button>
            <button className="rounded-full p-2  text-light-primary dark:text-dark-primary ">
                <IconPlayerSkipBack stroke={1.5} className="h-6 w-6" />
            </button>
            <button ref={scope} onClick={() => setTrack(prev => !prev)} className="rounded-full  transition duration-300 ease-in-out">
                {track ? <IconPlayerPause className="text-light-primary  dark:text-dark-primary " stroke={1.5} /> : <IconPlayerPlay className="text-light-primary dark:text-dark-primary " stroke={1.5} />}
            </button>

            <button className="rounded-full p-2  text-light-primary dark:text-dark-primary ">
                <IconPlayerSkipForward stroke={1.5} className="h-6 w-6" />
            </button>
            <button className="rounded-full p-2  text-light-primary dark:text-dark-primary ">
                <IconRepeat stroke={1.5} className="h-6 w-6" />
            </button>
        </div>
    )
}

const TrackManager: React.FC<TrackManagerProps> = ({ className }) => {
    const [sliderValue, setSliderValue] = useState<number>(50);
    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };
    const { isMobileScreen } = useMediaQueryContext();

    return (
        <div className={`${className} flex justify-center content-start flex-col items-center space-y-2`}>
            <div className='flex  justify-center'>
                <div className={`${!isMobileScreen == true ? 'hidden' : ''}  w-full pl-2 absolute justify-start items-center`}>
                    <img src={'./human.jpg'} alt="Card Image" className="h-10 w-10 object-cover rounded-xs" />
                </div>
                <TrackController />
            </div>
            <TrackSlider className='py-2' value={sliderValue} onChange={handleSliderChange} />
        </div>


    );
};

export default TrackManager;
