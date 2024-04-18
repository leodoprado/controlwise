import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background: #171820;
    color: white;
`

export const ContainerContent = styled.div`
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
    margin-bottom: 1.5rem;

    h1 {
        color: White;
        font-size: 0.7;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    
`

export const ContainerInput = styled.div`
    margin-bottom: 1.5rem;

    input {
        width: 18rem;
        padding: 0.8rem;
        font-size: 0.8rem;
        border: none;
        border-bottom: solid 1px #01435e;
        margin-bottom: 0.2rem;
        margin-top: 0.3rem;
        background: #23242F;
        color: white;
        box-sizing: border-box;
        outline: none;
        margin-bottom: 1rem;
        display: flex;
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
        margin-bottom: 1rem;
        font-size: 0.7rem;
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
      font-size: 0.7rem;
      text-decoration: none;
      color: #0185bc;
    }

    a:hover {
        text-decoration: underline;
    }
`