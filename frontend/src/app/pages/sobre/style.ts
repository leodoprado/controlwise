import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    background: rgb(55,54,65);
    background: linear-gradient(0deg, rgba(55,54,65,1) 9%, rgba(35,36,47,1) 31%, rgba(17,16,23,1) 82%);
    font-family: 'Comfortaa', sans-serif;
    color: white;
`

export const ContainerContent = styled.div`
    height: 100%;
    padding: 0px 10%;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: center;

    #infoBox {
        border-style: solid;
        border-color: white;
        border-left-width: 2px;
        padding-left: 10px;
    }

    h1 {
        font-weight: 7800;
        font-size: 4.5ex;
        margin-bottom: 20px;
    }
    
    p {
        font-size: 2ex;
    }
`