import React from "react";
import styled from "styled-components";
import { deviceSize, theme } from "../../common/theme";
import PaymentList from "./paymentList";
import Ts1 from "./ts/ts1";

import Test from "./test";
export default function MainPayment () {
    return (
        <WrapperDiv>
            <div>
                {/* <PaymentList /> */}
                {/* <Test/> */}
                <Ts1 />
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </WrapperDiv>
    );
}


const WrapperDiv = styled.div`
    background-color: ${theme.lightDark};
    width: 80%;
    min-height: 1000px;
    padding: 20px 10px 0px 10px;
    margin-top: 5%;
    display: grid;
    grid-template-columns: 45% 45%;
    align-items: center;
    justify-items: center;
    border-radius: 15px;
    box-shadow: 5px 5px 20px 10px;
    
    ${deviceSize.tablet} {
        grid-template-columns: 90%;
        div:nth-child(even) {
            display: none;
        }
    }
`;