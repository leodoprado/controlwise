import React from "react";
import './header.css'

export default class Header extends React.Component {
    render() {
        return(
            <header>
                <a>Home</a>                  
                <a>Info</a>                 
                <a>Ajuda</a>
                <a>Quem é ControlWise</a>
            </header>
        )
    }
}