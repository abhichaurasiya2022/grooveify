import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

interface MediaQueryContextType {
    isMediumScreen: boolean | undefined;
    isSmallScreen: boolean | undefined;
    isMobileScreen: boolean | undefined;
    areQueriesResolved: boolean;
}

const MediaQueryContext = createContext<MediaQueryContextType | undefined>(undefined);

const useMediaQueryContext = (): MediaQueryContextType => {
    const context = useContext(MediaQueryContext);
    if (!context) {
        throw new Error("useMediaQueryContext must be used within a MediaQueryProvider");
    }
    return context;
};

interface MediaQueryProviderProps {
    children: ReactNode;
}

const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({ children }) => {
    const [isMediumScreen, setMediumScreen] = useState<boolean | undefined>(undefined);
    const [isSmallScreen, setSmallScreen] = useState<boolean | undefined>(undefined);
    const [isMobileScreen, setMobileScreen] = useState<boolean | undefined>(undefined);
    const [areQueriesResolved, setQueriesResolved] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery1 = window.matchMedia("(max-width: 900px)");
        const mediaQuery2 = window.matchMedia("(max-width: 800px)");
        const mediaQuery3 = window.matchMedia("(max-width: 500px)");

        const checkQueries = () => {
            setMediumScreen(mediaQuery1.matches);
            setSmallScreen(mediaQuery2.matches);
            setMobileScreen(mediaQuery3.matches);
            setQueriesResolved(true);
        };

        checkQueries();

        const listener = () => {
            checkQueries();
        };

        window.addEventListener("resize", listener);

        return () => window.removeEventListener("resize", listener);
    }, []);

    const value: MediaQueryContextType = {
        isMediumScreen,
        isSmallScreen,
        isMobileScreen,
        areQueriesResolved
    };

    return (
        <MediaQueryContext.Provider value={value}>
            {children}
        </MediaQueryContext.Provider>
    );
};

export { MediaQueryProvider, useMediaQueryContext };
