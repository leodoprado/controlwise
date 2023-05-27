import styled from "styled-components";

export const ButtonComponent = styled.button`
    width: 100%;
    padding: 0.6rem 0;
    border-radius: 0;
    border: solid 1px #01435e;
    margin-bottom: 1rem;
    margin-top: 0.3rem;
    border-radius: 0.1rem;
    outline: none;
    background: #23242F;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    color: white;
    cursor: pointer;

    :hover {
        transition: 0.6s;
        border: solid 1px #0185bc;    
    }
`