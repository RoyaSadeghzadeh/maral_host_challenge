"use client"
import { useEffect, useState } from "react";

export const screens = {
    mobile: 576,
    tablet: 992,
}

export const useResponsive = () => {
    // screen resolutions
    const [state, setState] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    useEffect(() => {
        // update the state on the initial load
        onResizeHandler();

        // assign the event
        Setup();

        return () => {
            // remove the event
            Cleanup();
        };
    }, []);

    // update the state on window resize
    const onResizeHandler = () => {
        const isMobile = window.innerWidth < screens.mobile;
        const isTablet = window.innerWidth >= screens.mobile && window.innerWidth <= screens.tablet;
        const isDesktop = window.innerWidth >= screens.tablet;

        setState({ isMobile, isTablet, isDesktop });
    };

    // debounce the resize call
    // const debouncedCall = useDebounce(onResizeHandler, 500);

    // add event listener
    const Setup = () => {
        window.addEventListener("resize", onResizeHandler, false);
    };

    // remove the listener
    const Cleanup = () => {
        window.removeEventListener("resize", onResizeHandler, false);
    };

    return state;
};