import React, { useState } from "react";
import { ContainerHeader, NavigationHeader, DropdownMenu, MenuButton, MenuList, MenuItem } from './styles';
import Logo from '../../../assets/logo.svg';
import { NavLink } from "react-router-dom";
import { FaBars, FaUser, FaWallet, FaMoneyBill, FaSignOutAlt } from 'react-icons/fa';

interface HeaderProps {
    title: string,
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <ContainerHeader>
            <NavLink to="/dashboard">
                <img src={Logo} alt="Logo" />
            </NavLink>
            <h1>{title}</h1>
            <NavigationHeader>
                <DropdownMenu>
                    <NavLink to="#" onClick={toggleMenu}>
                        <MenuButton menuOpen={menuOpen}>
                            <span>Leonardo do Prado</span> <FaBars />
                        </MenuButton>
                    </NavLink>
                    <MenuList open={menuOpen}>
                        <MenuItem>
                            <NavLink to="/settings/profile">
                                <span>Perfil</span> <FaUser />
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/myexpenses/dashboard">
                                <span>Minhas Despesas</span> <FaMoneyBill />
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/mywallet/dashboard">
                                <span>Minha Carteira</span> <FaWallet />
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/signin">
                                <span>Sair</span> <FaSignOutAlt />
                            </NavLink>
                        </MenuItem>
                    </MenuList>
                </DropdownMenu>
            </NavigationHeader>
        </ContainerHeader>
    );
};

export default Header;
