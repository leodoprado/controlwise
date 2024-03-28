import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background: #171820;
    font-family: 'Mulish', sans-serif;
    color: white;
`

export const ContainerSignUp = styled.div`
    width: 25rem;
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    background: #23242F;
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