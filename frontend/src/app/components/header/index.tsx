import React from "react";
import { ContainerHeader, LogoHeader, NavigationHeader } from './styles'
import Logo from '../../../assets/logo.png'

export default class Header extends React.Component {
    render() {
        return(
            <ContainerHeader>
                <LogoHeader>
                    <img src={Logo} alt="" />
                    <h1>Control Wise</h1>
                </LogoHeader>
                <NavigationHeader>
                    <a href="#">Home</a>                  
                    <a href="#">Info</a>                 
                    <a href="#">Sobre</a>
                    <a href="#">Ajuda</a>
                    <a href="#">Login</a>
                </NavigationHeader>
            </ContainerHeader>
        )
    }
}