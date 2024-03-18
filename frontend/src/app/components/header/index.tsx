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
            </ContainerHeader>
        )
    }
}