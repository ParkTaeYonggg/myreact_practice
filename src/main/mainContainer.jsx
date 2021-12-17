import React from "react";
import { ContainerBox } from "../common/theme";
import { Link } from "react-router-dom";

export default function AllContainer() {
    return (
        <>
            <Link to="/login/page/"><ContainerBox>로그인</ContainerBox></Link>
            <ContainerBox>ㅋㅋ</ContainerBox>
            <ContainerBox>ㄷㄷ</ContainerBox>

            <ContainerBox>uu</ContainerBox>
            <ContainerBox>oo</ContainerBox>
            <ContainerBox>xx</ContainerBox>
        </>
    );
}