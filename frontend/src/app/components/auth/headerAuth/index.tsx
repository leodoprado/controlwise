import React from "react";
import { ContainerHeader, NavigationHeader, LogoHeader, LogoutHeader } from './styles'
import Logo from '../../../assets/logo.png'
import { BsFillPersonFill, BsDatabaseFillUp, BsFillClipboardDataFill, BsListCheck } from 'react-icons/bs';
import { GoTasklist } from 'react-icons/go';
import { HiDocumentText } from 'react-icons/hi';
import { MdLogout } from 'react-icons/md';
import { NavLink } from "react-router-dom";

export default class HeaderAuth extends React.Component {
    render() {
        return(
            <ContainerHeader>
                <LogoHeader>
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                        <h1>CW</h1>
                    </NavLink>
                </LogoHeader>
                <NavigationHeader>
                    <NavLink to="/perfil"><BsFillPersonFill/>Perfil</NavLink>
                    <NavLink to="/dados"><BsDatabaseFillUp/>Dados</NavLink>                  
                    <NavLink to="/analitico"><BsFillClipboardDataFill/>Analítico</NavLink>
                    <NavLink to="/planejamento"><GoTasklist/>Planejamento</NavLink>
                    <NavLink to="/relatorios"><HiDocumentText/>Relatórios</NavLink>
                </NavigationHeader>
                <LogoutHeader>
                    <NavLink to="/"><MdLogout/>Sair</NavLink>
                </LogoutHeader>
            </ContainerHeader>
        )
    }
}