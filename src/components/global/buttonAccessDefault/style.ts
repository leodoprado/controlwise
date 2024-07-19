import styled from "styled-components";

export const ButtonComponent = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.6rem;
    font-size: 12px;
    border: solid 1px #01435e;
    margin-bottom: 1rem;
    border-radius: .375rem;
    outline: none;
    background: #23242F;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    color: white;   
    cursor: pointer;
    color: #999999; 

    .button-icon {
        margin-right: 5px;
    }

    :hover {
        transition: 0.6s;
        border: solid 1px #0185bc;  
        color: #ffffff;
    }
`