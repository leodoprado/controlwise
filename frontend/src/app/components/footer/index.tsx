import React from "react";
import { ContentFooter } from './styles'
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return(
            <ContentFooter>
                © Copyright 2024 - <a href="https://github.com/leodoprado/controlwise" target="_blank">Control Wise</a>
            </ContentFooter>
        );
    }
}