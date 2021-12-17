import React, {useEffect} from "react";

export default function NaverLoginInga () {
    useEffect(() => {
        var naver_id_login = new window.naver_id_login("pmvvBqZAst0kcrdYqgIL", "http://localhost:3000/login/naver");
        // 접근 토큰 값 출력
        console.log(naver_id_login.oauthParams.access_token);
        // 네이버 사용자 프로필 조회
        naver_id_login.get_naver_userprofile(naverSignInCallback);
        // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
        naverSignInCallback(naver_id_login);
    });
    const naverSignInCallback = (e) => {
        // alert(naver_id_login.getProfileData('email'));
        // alert(naver_id_login.getProfileData('nickname'));
        // alert(naver_id_login.getProfileData('age'));
        console.log(e);
    }
    // naverSignInCallback();   
    
    return <h1>잠시만 기다려주세요..</h1>;
}