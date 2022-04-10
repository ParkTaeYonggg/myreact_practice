import React from "react";
import {Route} from "react-router";
import Footer from "./footer/MainFooter";
import Header from "./header/mainHeader";
import {StyledMainContainer} from "./common/theme";
import AllContainer from "./main/mainContainer";
import MainLogin from "./main/login/mainLogin";
import KakaoInga from "./main/login/kakao/kakaoInga";
import NaverLoginInga from "./main/login/naver/naverLoginInga";
import MainPayment from "./main/payment/mainPayment";
import LoginTest from "./loginTest";
import ThrowErr from "./errorboudary/throwErr";
class App extends React.Component {
    render () {
        return (
            <>
                <Route path="/" component={Header}/>
                <StyledMainContainer>
                    <Route exact path="/" component={ThrowErr}/>
                    <Route path = "/login/page/" component={MainLogin}/>
                    <Route path = "/login/kakao" component={KakaoInga} />
                    <Route path ="/login/naver" component={NaverLoginInga} />
                    <Route path ="/banner/page/" component={MainPayment}/>
                </StyledMainContainer>
                
                <Route path="/" component={Footer}/>
            </>
        ); 
    }
}

export default App;

