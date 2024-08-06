import React, { useState } from "react";
import { ContainerHeader, NavigationHeader, DropdownMenu, MenuButton, MenuList, MenuItem } from './styles';
import Logo from '../../../assets/logo.svg';
import { NavLink } from "react-router-dom";
import { FaBars, FaUser, FaWallet, FaMoneyBill, FaSignOutAlt } from 'react-icons/fa';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <ContainerHeader>
            <NavLink to="/dashboard">
                <img src={Logo} alt="Logo" />
            </NavLink>
            <NavigationHeader>
                <DropdownMenu>
                    <NavLink to="#" onClick={toggleMenu}>
                        <MenuButton>
                            <span>Leonardo do Prado</span> <FaBars />
                        </MenuButton>
                    </NavLink>
                    <MenuList open={menuOpen}>
                        <MenuItem>
                            <NavLink to="/settings">
                                <span>Perfil</span> <FaUser />
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/help">
                                <span>Minhas Despesas</span> <FaMoneyBill />
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/settings">
                                <span>Minha Carteira</span> <FaWallet />
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/logout">
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
