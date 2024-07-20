import React from "react";
import { ContainerHeader, LogoHeader, Card, IconSaldo, IconReceita, IconDespesa, Content, Title, Value } from './styles';
import Logo from '../../../assets/logo.svg';
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <ContainerHeader>
                <LogoHeader>
                    <NavLink to="/dashboard">
                        <img src={Logo} alt="Logo" />
                        <h1>Control Wise</h1>
                    </NavLink>
                </LogoHeader>
                
                <Card>
                    <IconSaldo>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.198" height="24" viewBox="0 0 19.198 24">
                            <g id="money-bag" transform="translate(-51.228 0)">
                                <g id="Grupo_985" data-name="Grupo 985" transform="translate(51.228 0)">
                                    <path id="Caminho_219" data-name="Caminho 219" d="M63.827,5.642l1.8-4.8a.639.639,0,0,0-.6-.84c-5.519-.12-4.08,3.96-8.159,1.32a.576.576,0,0,0-.84.72l1.68,3.6C53.988,7.922,51.228,13.8,51.228,18c0,5.279,4.32,6,9.6,6s9.6-.72,9.6-6C70.426,13.682,67.666,7.8,63.827,5.642Zm-3,7.559a3.55,3.55,0,0,1,1.2.24,3.552,3.552,0,0,1,0,6.719V21.6h-2.4v-1.44a3.5,3.5,0,0,1-2.4-3.36h2.4a1.2,1.2,0,0,0,1.2,1.2,1.134,1.134,0,0,0,1.2-1.2,1.2,1.2,0,0,0-1.2-1.2,4.263,4.263,0,0,1-1.2-.24,3.552,3.552,0,0,1,0-6.719V7.2h2.4v1.44a3.5,3.5,0,0,1,2.4,3.36h-2.4a1.2,1.2,0,0,0-1.2-1.2,1.29,1.29,0,0,0-1.2,1.2A1.2,1.2,0,0,0,60.827,13.2Z" transform="translate(-51.228 0)" />
                                </g>
                            </g>
                        </svg>
                    </IconSaldo>
                    <Content>
                        <Title>Saldo da Carteira</Title>
                        <Value>R$ 9.182,49</Value>
                    </Content>
                </Card>
                <Card>
                    <IconReceita>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.198" height="24" viewBox="0 0 19.198 24">
                            <g id="money-bag" transform="translate(-51.228 0)">
                                <g id="Grupo_985" data-name="Grupo 985" transform="translate(51.228 0)">
                                    <path id="Caminho_219" data-name="Caminho 219" d="M63.827,5.642l1.8-4.8a.639.639,0,0,0-.6-.84c-5.519-.12-4.08,3.96-8.159,1.32a.576.576,0,0,0-.84.72l1.68,3.6C53.988,7.922,51.228,13.8,51.228,18c0,5.279,4.32,6,9.6,6s9.6-.72,9.6-6C70.426,13.682,67.666,7.8,63.827,5.642Zm-3,7.559a3.55,3.55,0,0,1,1.2.24,3.552,3.552,0,0,1,0,6.719V21.6h-2.4v-1.44a3.5,3.5,0,0,1-2.4-3.36h2.4a1.2,1.2,0,0,0,1.2,1.2,1.134,1.134,0,0,0,1.2-1.2,1.2,1.2,0,0,0-1.2-1.2,4.263,4.263,0,0,1-1.2-.24,3.552,3.552,0,0,1,0-6.719V7.2h2.4v1.44a3.5,3.5,0,0,1,2.4,3.36h-2.4a1.2,1.2,0,0,0-1.2-1.2,1.29,1.29,0,0,0-1.2,1.2A1.2,1.2,0,0,0,60.827,13.2Z" transform="translate(-51.228 0)" />
                                </g>
                            </g>
                        </svg>
                    </IconReceita>
                    <Content>
                        <Title>Receitas</Title>
                        <Value>R$ 2.182,49</Value>
                    </Content>
                </Card>
                <Card>
                    <IconDespesa>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.198" height="24" viewBox="0 0 19.198 24">
                            <g id="money-bag" transform="translate(-51.228 0)">
                                <g id="Grupo_985" data-name="Grupo 985" transform="translate(51.228 0)">
                                    <path id="Caminho_219" data-name="Caminho 219" d="M63.827,5.642l1.8-4.8a.639.639,0,0,0-.6-.84c-5.519-.12-4.08,3.96-8.159,1.32a.576.576,0,0,0-.84.72l1.68,3.6C53.988,7.922,51.228,13.8,51.228,18c0,5.279,4.32,6,9.6,6s9.6-.72,9.6-6C70.426,13.682,67.666,7.8,63.827,5.642Zm-3,7.559a3.55,3.55,0,0,1,1.2.24,3.552,3.552,0,0,1,0,6.719V21.6h-2.4v-1.44a3.5,3.5,0,0,1-2.4-3.36h2.4a1.2,1.2,0,0,0,1.2,1.2,1.134,1.134,0,0,0,1.2-1.2,1.2,1.2,0,0,0-1.2-1.2,4.263,4.263,0,0,1-1.2-.24,3.552,3.552,0,0,1,0-6.719V7.2h2.4v1.44a3.5,3.5,0,0,1,2.4,3.36h-2.4a1.2,1.2,0,0,0-1.2-1.2,1.29,1.29,0,0,0-1.2,1.2A1.2,1.2,0,0,0,60.827,13.2Z" transform="translate(-51.228 0)" />
                                </g>
                            </g>
                        </svg>
                    </IconDespesa>
                    <Content>
                        <Title>Despesas</Title>
                        <Value>R$ 2.182,49</Value>
                    </Content>
                </Card>
            </ContainerHeader>
        );
    }
}
