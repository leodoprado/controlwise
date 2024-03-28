import styled from "styled-components";

export const Container = styled.div`
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

export const ContainerLogin = styled.div`
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    background: #23242F;
`

export const ContainerLeft = styled.div`
    width: 50%;
    padding-right: 1rem;

    img {
        width: 350px;
        height: 350px;
    }
`

export const ContainerRight = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 1rem;
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
        border: none;
        border-bottom: solid 1px #01435e;
        margin-bottom: 0.2rem;
        margin-top: 0.3rem;
        background: #23242F;
        color: white;
        box-sizing: border-box;
        outline: none;
        margin-bottom: 1rem;
    }

    input::placeholder {
        color: #f0ffff94;
    }

    input:focus {
        transition: 0.6s;
        border-bottom: solid 1px #0185bc;
    }

    span {
        font-size: 14px;
        color: red;
    }

    #esqueceu-senha {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        font-size: 0.8rem;
        text-decoration: none;
        color: #0185bc;
    }

    #esqueceu-senha:hover {
        text-decoration: underline;
    }
`

export const ContainerTitulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;

    h1 {
        color: White;
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    
`

export const ContainerLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      font-size: 1rem;
      text-decoration: none;
      color: #0185bc;
    }

    a:hover {
        text-decoration: underline;
    }
`