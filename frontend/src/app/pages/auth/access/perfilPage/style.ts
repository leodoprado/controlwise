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

    form {
        width: 100%;
        height: 100%;
    }

    section {
        margin-bottom: 20px;
        padding-bottom: 5px;
        border-bottom: 1px dashed white;
    }

`

export const ContainerContent = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    input {
        padding: 8px;
        border: 1px solid rgba(255,255,255,0.25);
        background: rgb(35, 36, 47);;
        outline: none;
        color: #fff;
        font-size: 1rem;
        transition: 0.5s;   
        margin-top: 0.3em;
        margin-bottom: 10px;
    }

    input:focus {
        border-bottom: 1px solid rgb(1, 255, 211);
        transition: 0.8s;
    }
`

export const ContainerLeft = styled.div`
    padding-right: 10px;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 15px;
`

export const ContainerRight = styled.div`
    padding-left: 10px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
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
        border: solid 1px #01435e;
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
        transition: 0.6s;
        border: solid 1px #0185bc;    
    }
`