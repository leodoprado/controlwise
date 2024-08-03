import styled from "styled-components";

export const ContainerHeader = styled.header`
    height: 2.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 10px 30px;
    box-shadow: 0 0 30px rgba(11,75,139,.251);

    img {
        width: 180px;
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
