import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    color: #555555;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
`;

export const ContainerLeft = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;

    @media (min-width: 1920px) {
        width: 20%;
    }
`;

export const ContainerContentLeft = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;

    img {
        max-width: 100%;
        max-height: 100%;
        margin-bottom: 20px;
    }

    .titulo {
        font-size: 20px;
        margin-bottom: 20px;
        color: #A6A6A6;
    }

    label {
        font-size: 14px;
    }

    input {
        width: 100%;
        box-sizing: border-box;
        background: #F1F3F6;
        border: none;
        border-bottom: solid 2px #A6A6A6;
        padding: 8px;
        outline: none;
        box-sizing: border-box;
        margin-bottom: 16px;
        margin-top: 5px;
    }

    input::placeholder {
        color: #A6A6A6;
    }

    input:focus {
        transition: 0.6s;
        border-bottom: solid 2px #4AC6C0;
    }

    button {
        width: 100%;
        box-sizing: border-box;
    }

    .btnEntrar {
        background: #4AC6C0;
        color: white;
        text-transform: uppercase;
        font-weight: 800;
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid transparent; /* Define uma borda inicial transparente */
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
        box-sizing: border-box;
        margin-bottom: 14px;
    }

    .btnEntrar:hover {
        background: white;
        color: #4AC6C0;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid #4AC6C0
    }


    .divider {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        column-gap: 3px;
        font-size: 12px;
        width: 100%;
        color: gray;
        opacity: 0.5;
        margin-bottom: 14px;
    }

    .divider::before, .divider::after {
        content: '';
        height: 1px;
        background-color: gray;
        opacity: 0.5;
    }

    .btnCadastrar {
        width: 100%;
        background: none;
        color: #4AC6C0;
        text-transform: uppercase;
        font-weight: 800;
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #4AC6C0;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
        box-sizing: border-box;
        text-align: center;
    }

    .btnCadastrar:hover {
        background: #4AC6C0;
        color: white;
        border: 1px solid transparent;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        text-decoration: none;
    }

    a {
        font-size: 0.7rem;
        text-decoration: none;
        color: #A6A6A6;
        margin-bottom: 16px;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export const ContainerRight = styled.div`
    background: #EEEEEE;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 80%;
        max-height: 80%;
    }
`;