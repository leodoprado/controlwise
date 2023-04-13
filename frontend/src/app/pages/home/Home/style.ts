import styled from "styled-components";

export const ContainerMain = styled.div`
    height: 100vh;  
    background: rgb(55,54,65);
    background: linear-gradient(0deg, rgba(55,54,65,1) 9%, rgba(35,36,47,1) 31%, rgba(17,16,23,1) 82%);
    display: flex;
    font-family: 'Comfortaa', sans-serif;
    color: white;
     

    #div-main {
        width: 50%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-weight: 7800;
        font-size: 4.5ex;
    }

    button {
        margin-top: 100px;
        width: 180px;
        height: 50px;
        font-size: 3ex;
        background-color: rgb(1, 200, 200);
        color: white;
        border-style: none;
        border-radius: 5px;
        cursor:pointer;
    }

    button:hover {
        background-color: #1b3ca2;
        transition: background-color 200ms linear;
    }
`