import React from "react";
import { theme } from "../common/theme";
import styled from "styled-components";

export default function Footer () {
    return (
        <DivWrapper>
            <div>적용 : redux, styled-component, router, axios, ...etc</div>
            <div>목적 : 리액트를 활용한 결과물들을 한번에 보기 위해서 만들었다.</div>
        </DivWrapper>
    );
}

const DivWrapper = styled.div`
    color: ${theme.brown};
    background-color: ${theme.dark};
    font-family: ${theme.fontFamily};
    font-size: 15px;
    display: grid;
    grid-template-rows: 30px 30px;
    justify-content: center;
    align-items: center;
`;