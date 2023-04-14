import React from "react";
import { ContainerHeader, NavigationHeader } from './styles'

export default class Header extends React.Component {
    render() {
        return(
            <ContainerHeader>
                <NavigationHeader>
                    <a href="#">Perfil</a>
                    <a href="#">Dados</a>                  
                    <a href="#">Analítico</a>
                    <a href="#">Planejamento</a>
                    <a href="#">Relatórios</a>
                </NavigationHeader>
            </ContainerHeader>
        )
    }
}