import styled from 'styled-components';

export const ContentHeaderContainer = styled.div`
    width: 100%;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.green};
    border-bottom: 1px solid #dee2e6;
    box-sizing: border-box;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavigationLinks = styled.div`
    display: flex;
    gap: 1rem;
    position: relative;

    a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        font-weight: 800;
        text-transform: uppercase;
        font-size: 16px;
        position: relative;
        padding: 0 0.5rem;

        &:not(:first-child)::before {
            content: '';
            position: absolute;
            left: -0.5rem; /* Ajuste conforme necessário */
            height: 100%;
            width: 1px;
            background-color: ${({ theme }) => theme.colors.white};
        }
    }

    a:hover {
        transition: 0.6s;
        color: ${({ theme }) => theme.colors.gray};
    }
`;
