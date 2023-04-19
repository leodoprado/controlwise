import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10%;
    flex-grow: 1;
    background: rgb(55,54,65);
    background: linear-gradient(0deg, rgba(55,54,65,1) 9%, rgba(35,36,47,1) 31%, rgba(17,16,23,1) 82%);
    font-family: 'Mulish', sans-serif;
    color: white;
`

export const ContainerContent = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: center;

    h1 {
        font-weight: 800;
        font-size: 2.5rem;
        text-transform: uppercase;
    }

    button {
        font-weight: 800;
        margin-top: 3rem;
        width: 180px;
        height: 3rem;
        font-size: 2.5ex;
        background-color: #20c4a3;
        color: white;
        border-style: none;
        border-radius: 5px;
        cursor:pointer;
    }

    button:hover {
        background-color: #0085bd;
        transition: 0.6s;
    }
` 

export const ContainerImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 440px;
        height: 440px;
    }
`