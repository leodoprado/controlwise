import React from "react";
import "./main.css"

export default class Main extends React.Component {
    render() {
        return(
            <main>
                <nav id="main-nav">
                    <div id="main-div">
                        <h1>ControlWise</h1>
                        <div id="title-description">
                            <p>A solução de Negócio na sua casa!</p>
                        </div>
                    </div>
                    <div id="title-button">
                        <button className="start-button">
                            Começe ja!
                        </button> 
                    </div>
                </nav>
            </main>
        );
    }
}