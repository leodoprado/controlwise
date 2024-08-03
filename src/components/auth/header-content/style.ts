// style.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContentHeaderContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.green};
    box-sizing: border-box;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const NavigationLinks = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.textGray};
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 18px;
    padding: 20px 40px;
    
    &:not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.colors.white};
    }

    &:first-child:hover {
        transition: 0.5s;
        border-top-left-radius: 20px;
    }

    &:hover {
        transition: 0.5s;
        color: ${({ theme }) => theme.colors.white};
        background-color: #67D1CC;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
`;
