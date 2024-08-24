import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-direction: row;
    box-sizing: border-box;
`;

export const ContainerLeft = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
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
        color: ${({ theme }) => theme.colors.textGray};
        font-size: 20px;
        margin-bottom: 20px;
    }

    .btnLinks {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
    }

    .btnAcesso {
        width: 50%;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.green};
        text-transform: uppercase;
        font-weight: 800;
        padding: 10px 20px;
        border: 1px solid ${({ theme }) => theme.colors.green};
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
        box-sizing: border-box;
        text-align: center;
    }

    .btnAcesso:hover {
        background-color: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid transparent;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        text-decoration: none;
    }

    .btnAcesso.active {
        background-color: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid transparent;
    }

    form {
        width: 100%;
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
        background-color: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.white};
        text-transform: uppercase;
        font-weight: 800;
        padding: 10px 20px;
        border: 1px solid transparent;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
        box-sizing: border-box;
        margin-bottom: 14px;
        width: 100%;
    }

    .btnCadastrar:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.green};
        border: 1px solid ${({ theme }) => theme.colors.green};
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    a {
        color: ${({ theme }) => theme.colors.textGray};
        font-size: 0.7rem;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .forgotpass {
        margin-bottom: 16px;
    }
`;

export const ContainerRight = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};;
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
