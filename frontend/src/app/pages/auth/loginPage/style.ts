import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(55,54,65);
    background: linear-gradient(0deg, rgba(55,54,65,1) 9%, rgba(35,36,47,1) 31%, rgba(17,16,23,1) 82%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerLogin = styled.div`
    width: 20rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    background: #23242F;

    form {
        width: 100%;
    }

    h1 {
        color: white;
    }

    #cadastre-se {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
        color: #0185bc;    
    }
    
    #esqueceu-senha {
        font-size: 0.8rem;
        color: #0185bc;
    }
`

export const ContainerLogo = styled.div`
    margin-bottom: 1rem;
    
    a { 
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-left: -1.2rem;
    }

    img {
        width:100px;
        height:100px;
    }

    h1 {
        padding-left: 0.1rem;
        color: White;
        font-weight: 700;
        font-size: 2rem;
    }
`

export const ContainerInput = styled.div`
    label {
        width: 50%;
        font-size: 0.8rem;
        Color: white;
    }

    input {
        width: 100%;
        font-size: 0.9rem;
        padding: 0.8rem;
        border-radius: 0;
        border: solid 1px #01435e;
        margin-bottom: 0.2rem;
        margin-top: 0.3rem;
        background: #23242F;
        color: white;
        box-sizing: border-box;
        outline: none;
    }

    input::placeholder {
        color: #f0ffff94;
    }

    input:focus {
        transition: 0.6s;
        border: solid 1px #0185bc;
    }

    span {
        font-size: 14px;
        color: red;
    }

    margin-bottom: 1rem;
`

export const ContainerLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0.8rem;
    color: #0185bc;
`