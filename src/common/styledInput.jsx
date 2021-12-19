import styled from "styled-components";
import { theme } from "./theme";

export default function StyledInput ({id, name, type, value, Ref, onChange, placeholder, error, errorMessage, labelName }) {
    return (
        <InputWrapperDiv>
            <LabelTag htmlFor={id} style={{justifySelf: "start"}}>{labelName}</LabelTag>
            <StyledInputTag id={id}
                            name={name}
                            type={type}
                            value={value}
                            ref={Ref}
                            onChange={onChange}
                            placeholder={placeholder}
                            error={error}
                            errorMessage={errorMessage}/>
        </InputWrapperDiv>
    );
}

const StyledInputTag = styled.input`
    border: none;
    border-bottom: 2px solid ${theme.brown};
    background-color: inherit;
    color: ${theme.brown};
    width: 100%;
    height: 40px;
`;
const InputWrapperDiv = styled.div`
    display: grid;
    grid-template-rows: 10% 85%;
    width: 80%;
    justify-items: center;
`;
const LabelTag = styled.label`
    justify-self: start;
    color: ${theme.brown};
    fonr-size: 13px;
`;