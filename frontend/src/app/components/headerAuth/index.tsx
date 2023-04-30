import React from "react";
import { ContainerHeader, NavigationHeader, LogoHeader, LogoutHeader } from './styles'
import Logo from '../../../assets/logo.png'
import { BsFillPersonFill, BsDatabaseFillUp, BsFillClipboardDataFill, BsListCheck } from 'react-icons/bs';
import { GoTasklist } from 'react-icons/go';
import { HiDocumentText } from 'react-icons/hi';
import { MdLogout } from 'react-icons/md';

export default class HeaderAuth extends React.Component {
    render() {
        return(
            <ContainerHeader>
                <LogoHeader>
                    <a href="#">
                        <img src={Logo} alt="" />
                        <h1>CW</h1>
                    </a>
                </LogoHeader>
                <NavigationHeader>
                    <a href="#"><BsFillPersonFill/>Perfil</a>
                    <a href="#"><BsDatabaseFillUp/>Dados</a>                  
                    <a href="#"><BsFillClipboardDataFill/>Analítico</a>
                    <a href="#"><GoTasklist/>Planejamento</a>
                    <a href="#"><HiDocumentText/>Relatórios</a>
                </NavigationHeader>
                <LogoutHeader>
                    <a href="#"><MdLogout/>Sair</a>
                </LogoutHeader>
            </ContainerHeader>
        )
    }
}