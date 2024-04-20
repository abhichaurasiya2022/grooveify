import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { Fragment, useEffect, useRef, useState } from 'react'



function update() {
    document.documentElement.classList.add('changing-theme')
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark')
        if (themeMeta) {
            themeMeta.setAttribute('content', '#0B1120');
        }
    } else {
        document.documentElement.classList.remove('dark')
        if (themeMeta) {
            themeMeta.setAttribute('content', '#f8fafc');
        }
    }
    window.setTimeout(() => {
        document.documentElement.classList.remove('changing-theme')
    })
}



function SunIcon({ ...props }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                className={'stroke-light-primary dark:stroke-dark-primary'}
            />
            <path
                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                className={'stroke-light-primary dark:stroke-dark-primary'}
            />
        </svg>
    )
}

function MoonIcon({ ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                className={'fill-transparent'}
            />
            <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                className={'fill-light-primary dark:fill-dark-primary'}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                className={'fill-light-primary dark:fill-dark-primary'}
            />
        </svg>
    )
}
interface ThemeToggleProps extends React.HTMLAttributes<HTMLDivElement> { }


export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
    // let [setting, setSetting] = useTheme()
    const [setting, setSetting] = useState<string>()

    useIsomorphicLayoutEffect(() => {
        let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        let theme = localStorage.theme
        if (theme === 'light' || theme === 'dark') {
            setSetting(theme);
        } else {
            let preferredTheme = mediaQuery.matches ? 'dark' : 'light';
            setSetting(preferredTheme);
            localStorage.theme = preferredTheme;
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        if (setting === 'light' || setting === 'dark') {
            localStorage.theme = setting;
            update();
        }


    }, [setting])
    function onSysChange() {
        let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        let preferredTheme = mediaQuery.matches ? 'dark' : 'light';
        setSetting(preferredTheme);
        localStorage.theme = preferredTheme;
        update();
    }
    useEffect(() => {
        let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')


        if (mediaQuery?.addEventListener) {
            mediaQuery.addEventListener('change', onSysChange)
        } else {
            mediaQuery.addListener(onSysChange)
        }



        return () => {
            if (mediaQuery?.removeEventListener) {
                mediaQuery.removeEventListener('change', onSysChange)
            } else {
                mediaQuery.removeListener(onSysChange)
            }

        }
    }, [])



    return (
        <div className={` ${className} flex self-center text-light-primary dark:text-dark-primary`}>
            {
                setting === 'dark' ?
                    (
                        <button className='rounded-full overflow-hidden text-light-primary dark:text-dark-primary' onClick={() => setSetting('light')}>< MoonIcon className="text-light-primary dark:text-dark-primary w-8 h-8 " /> </button>
                    ) : (
                        <button onClick={() => setSetting('dark')}><SunIcon className="w-8 h-8 text-light-primary dark:text-dark-primary" /></button>
                    )
            }
        </div>


    )
}
