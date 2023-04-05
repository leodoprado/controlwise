import React from "react";
import { ContainerHeader, LogoHeader } from './styles'
import Logo from '../../../assets/logo.png'

export default class Header extends React.Component {
    render() {
        return(
            <ContainerHeader>
                <LogoHeader>
                    <img src={Logo} alt="" />
                </LogoHeader>
                <a href="#">Home</a>                  
                <a href="#">Info</a>                 
                <a href="#">Sobre</a>
                <a href="#">Ajuda</a>
                <a href="#">Login</a>
            </ContainerHeader>
        )
    }
}