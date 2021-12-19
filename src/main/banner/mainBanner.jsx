import React from "react";
import styled from "styled-components";
import { theme } from "../../common/theme";

export default function MainBanner () {
    return (
        <WrapperDiv>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </WrapperDiv>
    );
}


const WrapperDiv = styled.div`
    background-color: ${theme.lightDark};
    width: 80%;
    min-height: 2100px;
    padding: 20px 10px 0px 10px;
    margin-top: 5%;
    display: grid;
    grid-template-rows: 20%;
    align-items: center;
    li{
        height: 120px;
        width: 100%;
        list-style: none;
    }
`;