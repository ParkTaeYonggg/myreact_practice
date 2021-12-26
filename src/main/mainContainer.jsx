import React from "react";
import { ContainerBox, deviceSize, theme } from "../common/theme";
import { Link } from "react-router-dom";
import { DivTag } from "./login/mainLogin";
import styled from "styled-components";
import StyledLink from "../common/StyledLink";
import MainPayment from "./payment/mainPayment";

export default function AllContainer() {
    return (
        <>
            <StyledLink to="/login/page/">
                <ContainerBox>
                    <span>로그인</span>
                    <MatchedImg></MatchedImg>
                </ContainerBox>
            </StyledLink>
            <StyledLink to="/banner/page/">
                <ContainerBox>
                    <span>결제</span>
                    <h1>대기중..</h1>
                </ContainerBox>
            </StyledLink>
            <ContainerBox>준비중</ContainerBox>

            <ContainerBox>준비중</ContainerBox>
            <ContainerBox>준비중</ContainerBox>
            <ContainerBox>준비중</ContainerBox>
        </>
    );
}

const MatchedImg = styled(DivTag)`
    width: 300px;
    height: 270px;
    background-size: 300px 270px;    
    ${deviceSize.desktop} {
        width: 280px;
        height: 230px;
        background-size: 280px 230px;
    };
    ${deviceSize.tablet} {
        width: 230px;
        height: 190px;
        background-size: 230px 190px;
    };
`;