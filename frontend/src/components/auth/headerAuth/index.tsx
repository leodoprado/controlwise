import React from "react";
import { ContainerHeader, NavigationHeader, LogoHeader } from './styles'
import Logo from '../../../assets/logo.png'
import { NavLink } from "react-router-dom";

export default class HeaderAuth extends React.Component {
    render() {
        return(
            <ContainerHeader>
                <LogoHeader>
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                        <h1>Control Wise</h1>
                    </NavLink>
                </LogoHeader>
                <NavigationHeader>
                    <NavLink to="/">Painel</NavLink>
                    <NavLink to="/">Gráficos</NavLink>
                    <NavLink to="/">Lançamentos</NavLink>
                    <NavLink to="/">Metas</NavLink>
                    <NavLink to="/">Configurações</NavLink>
                    <NavLink to="/logout">Sair</NavLink>
                </NavigationHeader>
            </ContainerHeader>
        )
    }
}