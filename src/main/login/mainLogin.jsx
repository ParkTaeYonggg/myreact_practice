import React from "react";
import styled from "styled-components";
import { deviceSize, theme } from "../../common/theme";
import LoginTags from "./loginTags";
import { useSelector } from "react-redux";
import AfterLogin from "./afterLogin";
import loginView from "./login_img/loginView.gif";

export default function MainLogin () {
const state = useSelector(state => state.loginReducer);

    return (
        <MainLoginWrapper>
            {state.isLogin ? <AfterLogin/> : <LoginTags />}
            <DivTag id="imgDiv"></DivTag>
        </MainLoginWrapper>
    );
}

export const DivTag = styled.div`
    width: 95%;
    height: 400px;
    border-radius: 15px;
    background-image: url(${loginView});
    background-size: 95% 400px;
    background-repeat: no-repeat;
`;
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
        #imgDiv {
            display: none;
        }
    }
`;