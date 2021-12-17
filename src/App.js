import React from "react";
import {Route} from "react-router";
import Footer from "./footer/MainFooter";
import Header from "./header/mainHeader";
import {StyledMainContainer} from "./common/theme";
import AllContainer from "./main/mainContainer";
import MainLogin from "./main/login/mainLogin";
import KakaoInga from "./main/login/kakao/kakaoInga";
import NaverLoginInga from "./main/login/naver/naverLoginInga";

class App extends React.Component {
    render () {
        return (
            <>
                <Route path="/" component={Header}/>
                <StyledMainContainer>
                    <Route exact path="/" component={AllContainer}/>
                    <Route path = "/login/page/" component={MainLogin}/>
                    <Route path = "/login/kakao" component={KakaoInga} />
                    <Route path ="/login/naver" component={NaverLoginInga} />
                </StyledMainContainer>

                <Route path="/" component={Footer}/>
            </>
        ); 
    }
}

export default App;

