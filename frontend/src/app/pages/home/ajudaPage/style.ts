import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 10%;
    flex-grow: 1;
    background: rgb(55,54,65);
    background: linear-gradient(0deg, rgba(55,54,65,1) 9%, rgba(35,36,47,1) 31%, rgba(17,16,23,1) 82%);
    font-family: 'Mulish', sans-serif;
    color: white;
`

export const ContainerContent = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const ContainerTittle = styled.h1`
    width: 100%;
    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

export const ContainerInput = styled.div`
    width: 40%;

    input {
        width: 100%;
        padding: 8px;
        border: 1px solid rgba(255,255,255,0.25);
        background: rgb(35, 36, 47);;
        outline: none;
        color: #fff;
        font-size: 1rem;
        transition: 0.5s;   
        margin-top: 0.3em;
        margin-bottom: 1.3rem;
    }

    input:focus {
        border-bottom: 1px solid rgb(1, 255, 211);
        transition: 0.8s;
    }

    textarea {
        width: 100%;
        height: 100px;
        padding: 8px;
        border: 1px solid rgba(255,255,255,0.25);
        background: rgb(35, 36, 47);;
        outline: none;
        color: #fff;
        font-size: 1rem;
        transition: 0.5s;   
        margin-top: 0.3em;
        margin-bottom: 1.3rem;
        resize: none;
    }

    textarea:focus {
        border-bottom: 1px solid rgb(1, 255, 211);
        transition: 0.8s;
    }

    button {
        width: 104%;
        padding: 0.6rem 0;
        border-radius: 0;
        border: solid 1px rgb(1, 255, 211);
        margin-bottom: 1rem;
        border-radius: 0.1rem;
        outline: none;
        background: #23242F;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 2px;
        color: white;
        cursor: pointer;
    }
    button:hover {
        transition: 1s;
        border: solid 1px #0185bc;    
    }
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;

    button {
        width: 100%;
        padding: 0.6rem 0;
        border-radius: 0;
        border: solid 1px rgb(1, 255, 211);
        margin-bottom: 1rem;
        border-radius: 0.1rem;
        outline: none;
        background: #23242F;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 2px;
        color: white;
        cursor: pointer;
    }
    button:hover {
        transition: 1s;
        border: solid 1px #0185bc;    
    }
`
