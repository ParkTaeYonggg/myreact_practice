import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import StyledInput from "../../common/styledInput";

import {useDispatch, useSelector} from "react-redux";
import {action_login_request} from "../../common/reducers/loginReducer";
import LoginMiddleWare from "../../common/reducers/loginMiddleWare";
import { theme } from "../../common/theme";
import KakaoLogin from "./kakao/kakaoLogin";
import NaverLogin from "./naver/naverLogin";

export default function LoginTags () {
        const [idPw, setIdPw] = useState([]);
        const dispatch = useDispatch();
        const state = useSelector(state => state.loginReducer);

    // 서브및 핸들러
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (inputRefId.current.value.trim() === "") {
            alert("아이디를 입력해주세요.");
            inputRefId.current.focus();
        } else if (inputRefPw.current.value.trim() === "") {
            alert("비밀번호를 입력해주세요.");
            inputRefPw.current.focus();
        } else {
            dispatch(action_login_request());
        }
    }
    useEffect(() => {
        if (state.isRequest) {
            LoginMiddleWare(`/api/login/redux?id=${idPw.id}&pw=${idPw.pw}`,dispatch, "login");
        }
    },[state.isRequest])
    // 리듀서 끝
    const handlerValues = (type, e) => {
        setIdPw({...idPw, [type]:e.target.value});
    }

    let inputRefId = useRef();
    let inputRefPw = useRef();

    
    return (
        <LoginTagsWrapper onSubmit={e => handlerSubmit(e)}>
            <StyledInput id="id"
                            name="id"
                            value={idPw.id || ""}
                            onChange={e => handlerValues("id", e)}
                            Ref={e => inputRefId.current = e}
                            type="text"
                            error={false}
                            errorMessage="올바른 아이디 형식을 입력해주세요."
                            placeholder="아이디를 입력해주세요."
                            labelName="아이디"/>                
            <StyledInput id="pw"
                            name="pw"
                            value={idPw.pw || ""}
                            onChange={e => handlerValues("pw",e)}
                            Ref={e => inputRefPw.current = e}
                            type="password"
                            error={false}
                            errorMessage="올바른 비밀번호 형식을 입력해주세요."
                            placeholder={"비밀번호를 입력해주세요."}
                            labelName="비밀번호"/>
            <StyledBtn>로그인</StyledBtn>
            <p></p>
            <KakaoLogin/>
            <NaverLogin/>
        </LoginTagsWrapper>
    );
}


export const LoginTagsWrapper = styled.form`
    width: 95%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

export const StyledBtn = styled.button`
    width: 82%;
    height: 40px;
    margin: 0px;
    padding: 0px;
    border-radius: 15px;
    background-color: ${theme.brown};
    cursor: pointer;
    color: ${theme.dark};
`;