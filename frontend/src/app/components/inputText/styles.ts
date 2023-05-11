import styled from "styled-components";

export const InputComponent = styled.input`
        width: 100%;
        padding: 8px;
        border: 1px solid rgba(255,255,255,0.25);
        background: rgb(35, 36, 47);;
        border-radius: 5px;
        outline: none;
        color: #fff;
        font-size: 1em;
        transition: 0.5s;
        margin-top: 0.3em;

    :focus {
        border-bottom: 1px solid rgb(1, 255, 211);
        transition: 0.8s;
    }
`