import React from "react";
import { Container } from "./style";


export default class Header extends React.Component {
    render() {
        return (
            <Container>
                <ul>
                    <li>
                        <a href="/resumo">Resumo</a>
                    </li>
                    <li>
                        <a href="/lancamentos">Lançamentos</a>
                    </li>
                    <li>
                        <a href="/analise">Análise</a>
                    </li>
                    <li>
                        <a href="/metas">Metas</a>
                    </li>
                    <li>
                        <a href="/configuracao">Configurações</a>
                    </li>
                </ul>
            </Container>
        );
    }
}
