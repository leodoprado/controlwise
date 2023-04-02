import React from "react";
import { ContainerHeader } from './styles'

export default class Header extends React.Component {
    render() {
        return(
            <ContainerHeader>
                <a href="#">Home</a>                  
                <a href="#">Info</a>                 
                <a href="#">Sobre</a>
                <a href="#">Ajuda</a>
                <a href="#">Login</a>
            </ContainerHeader>
        )
    }
}