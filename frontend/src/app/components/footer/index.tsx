import React from "react";
import { ContentFooter } from './styles'
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return(
            <ContentFooter>
                Copyright 2023 <Link href="https://github.com/leodoprado/ControlWise">Control Wise</Link>
            </ContentFooter>
        );
    }
}