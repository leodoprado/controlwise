import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.gray};
`;