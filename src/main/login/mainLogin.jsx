import React from "react";
import styled from "styled-components";
import { deviceSize, theme } from "../../common/theme";
import LoginTags from "./loginTags";
import { useSelector } from "react-redux";
import AfterLogin from "./afterLogin";

export default function MainLogin () {
const state = useSelector(state => state.loginReducer);
    return (
        <MainLoginWrapper>
            {state.isLogin ? <AfterLogin/> : <LoginTags />}
            <h2>이미지창</h2>
        </MainLoginWrapper>
    );
}

const MainLoginWrapper = styled.div`
    width: 80%;
    height: 400px;
    background-color: ${theme.lightDark};
    display: grid;
    grid-template-columns: 48% 48%;
    align-items: center;
    justify-items: center;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 5px ${theme.lightDark};
    
    ${deviceSize.tablet} {
        grid-template-columns: 95%;
        h2{
            display: none;
        }
    }
`;