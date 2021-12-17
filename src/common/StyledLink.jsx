import styled from "styled-components";
import { theme } from "./theme";
import {Link} from "react-router-dom";

export default function StyledLink ({children, to, positiony}) {
    return <StyledLinkTag to={to} positiony={positiony}>{children}</StyledLinkTag>;
}

const StyledLinkTag = styled(Link)`
    text-decoration: none;    
    color: inherit;
    &::before {
        position: absolute;
        content: '';
        width: 0px;
        height: 95%;
        top: -2px;
        transform: translate(30px, 0px);
        border-bottom: 2px solid ${props => props.positiony >= 15 ? theme.brown : theme.background};
    };
    &:hover::before {
        animation: borderBefore 0.7s both ease-out;
    };
    @keyframes borderBefore {
        to { width: 55px; transform: translate(0px, 0px);};
    };
`;