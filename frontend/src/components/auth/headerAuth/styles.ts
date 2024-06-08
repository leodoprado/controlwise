import styled from "styled-components";

export const ContainerHeader = styled.div`
    height: 3rem; /* Altura do ContainerHeader */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #23242F;
    border-bottom: 1px outset rgb(255, 255, 255);
    padding: 15px 10%;
`;

export const LogoHeader = styled.div`
    a { 
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        letter-spacing: 1.5px;
    }

    img {
        width: 60px;
        height: 60px;
    }

    h1 {
        padding-left: 0.1rem;
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
    }
`;

export const Card = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

export const IconSaldo = styled.div`
    background-color: #007BFF;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 1rem;

    svg {
        width: 24px;
        height: 24px;
        fill: #FFFFFF;
    }
`;

export const IconReceita = styled.div`
    background-color: green;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 1rem;

    svg {
        width: 24px;
        height: 24px;
        fill: #FFFFFF;
    }
`;

export const IconDespesa = styled.div`
    background-color: red;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 1rem;

    svg {
        width: 24px;
        height: 24px;
        fill: #FFFFFF;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: white;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
`;

export const Value = styled.div`
    font-size: 16px;
    color: white;
`;
