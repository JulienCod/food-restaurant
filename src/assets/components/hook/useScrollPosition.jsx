import { useEffect } from "react";
import { useState } from "react"

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] =useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    return scrollPosition;
}

export default useScrollPosition;