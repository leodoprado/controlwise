import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 45rem;
    color: #fff;
    border: 1px solid #666666;
    padding: 1rem 2rem;
    margin-bottom: 1rem;

    :hover {
        border: 1px solid #7c7c7c;
    }

`

export const done = styled.div`
  opacity: 0.5;
`

export const CardButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
        color: #fff;
        padding: 0.3em 0.9em;
        font-size: 0.9em;
        font-weight: 500;
        background-color: #1a1a1a;
        border: 1px solid #666666;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button:hover{
        border: 1px solid #7c7c7c;
        background-color: #222222;
    }
`
