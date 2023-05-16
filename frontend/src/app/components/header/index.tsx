import React from "react";
import { ContainerHeader, LogoHeader, NavigationHeader } from './styles'
import Logo from '../../../assets/logo.png'
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return(
            <ContainerHeader>
                <LogoHeader>
                    <NavLink to="#">
                        <img src={Logo} alt="" />
                        <h1>Control Wise</h1>
                    </NavLink>
                </LogoHeader>
                <NavigationHeader>
                    <NavLink to="/">Home</NavLink>                  
                    <NavLink to="/sobre">Sobre</NavLink>
                    <NavLink to="/info">Info</NavLink>                 
                    <NavLink to="/ajuda">Ajuda</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </NavigationHeader>
            </ContainerHeader>
        )
    }
}