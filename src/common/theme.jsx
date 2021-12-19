import styled from "styled-components";

export const deviceSize = {
    mobile: "@media screen and (max-width: 500px)",
    tablet: "@media screen and (max-width: 800px)",
    desktop: "@media screen and (max-width: 1100px)"
}

export const theme = {
    brown: "#DC9146",
    dark: "#464646",
    borderColor: "#FFE4B5",
    background: "#dcdcdc",
    warningColor: "#F08C8C",
    successColor: "#8CF064",
    lightDark: "#3c3c3c", 
    fontFamily: "'Gill Sans', sans-serif"
}

export const StyledMainContainer = styled.div`
    width:100%;
    min-height: 800px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    background-color: ${theme.dark};
    font-family: ${theme.fontFamily};
`;

export const ContainerBox = styled.div`
    display: grid;
    grid-template-rows: 10% 80%;
    align-items: start;
    justify-content: center;
    justify-items: center;
    margin-top: 30px;
    width: 340px;
    height: 310px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 5px ${theme.borderColor};
    background-color: ${theme.borderColor};
    ${deviceSize.desktop} {
        width: 300px;
        height: 270px;
    };
    ${deviceSize.tablet} {
        width: 250px;
        height: 220px;
    };
`;

