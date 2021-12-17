import React from "react";
import styled from "styled-components";
import kakaoImgBtn from "../login_img/kakao_login_medium_wide.png";



export default function KakaoLogin () {
    const kakao_api = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=44b87352c8fc4301a07f8f05b18cf35c&redirect_uri=http://localhost:3000/login/kakao";
    const kakao_inga = () => {window.location.assign(kakao_api)}
    return <Kakao_btn onClick={kakao_inga}>로그인</Kakao_btn>;
}

const Kakao_btn = styled.div`
    background-image: url(${kakaoImgBtn});
    background-repeat: no-repeat;
    background-size: 99% 40px;
    display: inline-block;
    color: transparent;
    cursor: pointer;
    width: 300px;
    height: 40px;
    border-radius: 12px;
`;