import styled from "styled-components";
import React, { useRef, useState } from "react";
import StyledInput from "../../common/styledInput";
import { LoginTagsWrapper, StyledBtn } from "./loginTags";
import { useSelector, useDispatch } from "react-redux";
import LoginMiddleWare from "../../common/reducers/loginMiddleWare";
import { theme } from "../../common/theme";

export default function AfterLogin () {
    const [values, setValuses] = useState([]);
    const state = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();
    const handlerValues = (type,e) => {setValuses({...values, [type]:e.target.value})}

    let inputRefNickname = useRef();
    let inputRefPw = useRef();

    const handlerSubmit = (e) => {
        e.preventDefault();
        alert("입력되지 않은 항목은 기존과 동일하게 저장됩니다.");
        LoginMiddleWare("/api/login/update?nickname="+values.nickname,dispatch, "update");
    }
    return (
        <LoginTagsWrapper onSubmit={e => handlerSubmit(e)}>
            <h1 style={{color: theme.brown}}>회원정보</h1>
            <StyledInput id="nickname"
                         name="nickname"
                         value={values.nickname || ""}
                         onChange={e => handlerValues("nickname",e)}
                         Ref={e => inputRefNickname = e}
                         error={false}
                         errorMessage="올바른 닉네임을 입력해주세요."
                         type="text"
                         placeholder={"변경할 닉네임을 입력해주세요. (현재 : "+state.userInfo.nickname +")"}
                         labelName="닉네임"/>
            <StyledInput id="pw"
                         name="pw"
                         value={values.pw || ""}
                         onChange={e => handlerValues("pw",e)}
                         Ref={e => inputRefPw = e}
                         error={false}
                         errorMessage="올바른 비밀번호를 입력해주세요."
                         type="password"
                         placeholder="변경할 비밀번호를 입력해주세요."
                         labelName="비밀번호"/>
            <StyledBtn>변경하기</StyledBtn>
        </LoginTagsWrapper>
    );
}

