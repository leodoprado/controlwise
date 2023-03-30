import React from "react";

export default class Header extends React.Component {
    render() {
        return(
        <header>
            <nav>
                <a>Home</a>
                 - 
                <a>Info</a>
                 - 
                <a>Ajuda</a>
                - 
                <a>Quem é ControlWise</a>
            </nav>
        </header>
        )
    }
}