import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    background: #d6d7d7;
    border-radius: 20px 20px 0 0;

    ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        height: 100%;
        color: white;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
    }

    li {
        list-style: none;
        height: 100%;
        border-left: 1px solid #eaeaea;
    }

    li:first-child {
        border-left: none; 
    }

    a {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 3rem;
        text-decoration: none;
        color: black;
    }

    a:hover {
        transition: 400ms;
        background-color: #f0f0f0;
    }
`;