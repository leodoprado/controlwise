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

    a {
        text-decoration: none;
    }

    h1 {
        color: ${({ theme }) => theme.colors.gray};
        text-transform: uppercase;
        font-weight: 800;
    }
`;

export const NavigationHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

export const DropdownMenu = styled.div`
    position: relative;
`;

interface MenuButtonProps {
    menuOpen: boolean;
}

export const MenuButton = styled.div<MenuButtonProps>`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: ${({ theme, menuOpen }) => (menuOpen ? theme.colors.green : theme.colors.textGray)};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        font-size: 16px;
        font-weight: 400;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.green};
    }
`;

interface MenuListProps {
    open: boolean;
}

export const MenuList = styled.ul<MenuListProps>`
    position: absolute;
    top: 110%;
    right: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    list-style: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
    opacity: ${({ open }) => (open ? 1 : 0)};
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-10px)')};
    transition: opacity 0.3s ease, transform 0.3s ease;
    width: 200px;
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
`;

export const MenuItem = styled.li`
    & > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        color: ${({ theme }) => theme.colors.textGray};
        font-weight: 400;
        font-size: 16px;

        &:hover {
            transition: 0.5s;
            color: white;
            background-color: ${({ theme }) => theme.colors.green};
        }
    }

    &:first-child > a:hover {
        border-radius: 4px 4px 0 0;
    }

    &:last-child > a:hover {
        border-radius: 0 0 4px 4px;
    }
`;
