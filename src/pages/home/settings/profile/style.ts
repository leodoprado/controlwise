import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-grow: 1;
    flex-direction: column;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.gray};
    padding: 0 30px;
`;

export const ContainerContent = styled.div`
    width: 100%;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ContainerLineContent = styled.div`
    width: 100%;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;