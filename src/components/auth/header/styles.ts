import styled from "styled-components";

export const ContainerHeader = styled.div`
    height: 2.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

    img {
        width: 220px;
    }
`;

export const NavigationHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    a {
        color: ${({ theme }) => theme.colors.textGray};
        text-decoration: none;
        font-weight: 400;
        font-size: 26px;
    }

    a:hover {
        transition: 1s;
        color: ${({ theme }) => theme.colors.green};
    }
`;
