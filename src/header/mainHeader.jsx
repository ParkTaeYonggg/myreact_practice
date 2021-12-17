import React, {useMemo, useEffect, useState} from "react";
import {throttle} from "lodash";
import { theme } from "../common/theme";
import styled from "styled-components";
import {useSelector} from "react-redux";
import StyledLink from "../common/StyledLink";

export default function Header () {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollOnOff, setIsScrollOnOff] = useState(false);
    const state = useSelector(state => state.loginReducer);

    const ScrollEventHandler = useMemo(
        ()=>
            throttle(()=>{
                if (window.scrollY >= 15 && !isScrollOnOff) {
                    setScrollPosition(window.scrollY);
                    setIsScrollOnOff(true);
                } else if (window.scrollY <= 15 && isScrollOnOff) {
                    setScrollPosition(window.scrollY);
                    setIsScrollOnOff(false);
                }
            },300)
    );
    useEffect(() => {
        window.addEventListener("scroll", ScrollEventHandler);
        return () => {window.removeEventListener("scroll", ScrollEventHandler)}
    });
    return (
        <StyledHeader>
            <InnerBox positiony={scrollPosition}>
                <span>로고</span>
                {state.isLogin ? "반가워요 " + state.userInfo.nickname + "님" : "안녕하세요?"}
                <StyledLink to="/" positiony={scrollPosition}>메인으로</StyledLink>
            </InnerBox>
        </StyledHeader>
    );
}
const StyledHeader = styled.div`
    background-color: ${theme.dark};
    font-family: ${theme.fontFamily};
    margin: 0px;
   
`;

const InnerBox = styled.div`
    position: fixed;
    width: 100%;
    padding: 3px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${theme.lightDark};
    animation-name: ${props => props.positiony >= 15 ? "colorOn" : "colorOff"};
    animation-fill-mode: both;
    animation-timing-function: ease-out;
    animation-duration: 0.7s;

    @keyframes colorOff {
        from {
            color: ${theme.brown};
            opacity: 1;
        };
        to {
            color: ${theme.background};
            opacity: 0.3;
        }
    }
    @keyframes colorOn {
        from {
            color: ${theme.background};
            opacity: 0.3;
        };
        to {
            color: ${theme.brown};
            opacity: 1;
        }
    }

`;