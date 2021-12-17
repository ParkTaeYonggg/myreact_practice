import React, {useState, useRef, useMemo, useEffect} from "react";
import {throttle} from "lodash";

export const clickDesign = (e,{mousePosition}) => {
    // window.addEventListener("scroll",fnCursor);
    console.log(e.pageX + " : " + e.pageY);
}


const [positionY, setPositionY] = useState();
    const scrollEventHandler = useMemo(
        ()=>
            throttle(()=>{
                setPositionY(window.scrollY);
            },300)
    )

    useEffect(() => {
        window.addEventListener("scroll", scrollEventHandler)
        return () => {window.removeEventListener("scroll", scrollEventHandler)}
    });
    return (
        <StyledHeader>헤더</StyledHeader>
    );
