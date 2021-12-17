import styled from "styled-components";
import { theme } from "./theme";

export default function StyledInput ({id, name, type, value, Ref, onChange, placeholder, error, errorMessage }) {
    return <StyledInputTag id={id}
                        name={name}
                        type={type}
                        value={value}
                        ref={Ref}
                        onChange={onChange}
                        placeholder={placeholder}
                        error={error}
                        errorMessage={errorMessage}/>;
}

const StyledInputTag = styled.input`
    border: none;
    border-bottom: 2px solid ${theme.brown};
    background-color: inherit;
    color: ${theme.brown};
    width: 80%;
    height: 40px;
`;