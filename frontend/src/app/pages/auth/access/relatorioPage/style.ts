import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 10%;
    padding-top: 2rem;
    flex-grow: 1;
    background: rgb(55,54,65);
    background: linear-gradient(0deg, rgba(55,54,65,1) 9%, rgba(35,36,47,1) 31%, rgba(17,16,23,1) 82%);
    font-family: 'Mulish', sans-serif;
    color: white;
`

export const ContainerInput = styled.div`
    width: 430px;
    input {
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
    }

    input:focus {
        border-bottom: 1px solid rgb(1, 255, 211);
        transition: 0.8s;
    }
`

export const ContainerLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 15px;
`

export const ContainerRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`