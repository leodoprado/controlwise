import styled from "styled-components";

export const ButtonComponent = styled.button`
    width: 100%;
    padding: 1rem;
    border: solid 1px #01435e;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-radius: 20px;
    outline: none;
    background: #23242F;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    color: white;   
    cursor: pointer;
    color: #999999;

    :hover {
        transition: 0.6s;
        border: solid 1px #0185bc;  
        color: #ffffff;
    }
`