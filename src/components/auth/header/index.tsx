import React from "react";
import { ContainerHeader, NavigationHeader } from './styles';
import Logo from '../../../assets/logo.svg';
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <ContainerHeader>
                <NavLink to="/dashboard">
                    <img src={Logo} alt="Logo" />
                </NavLink>
                <NavigationHeader>
                    <NavLink to="/dashboard"></NavLink>
                    <NavLink to="/dashboard"></NavLink>
                </NavigationHeader>
            </ContainerHeader>
        );
    }
}
