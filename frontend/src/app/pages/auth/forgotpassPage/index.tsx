import React from "react";
import { Container, ContainerLogin, ContainerLogo, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'
import { NavLink } from "react-router-dom";

const ForgotpassPage = () => {
    return (
        <>
            <Container>
                <ContainerLogin>
                    <ContainerLogo>
                        <NavLink to="/">
                            <img src={Logo} alt="" />
                            <h1>Control Wise</h1>
                        </NavLink>
                    </ContainerLogo>     

                    <h1>Recupere seu e-mail / senha</h1>

                    <label htmlFor="">Número de telefone ou e-mail</label>
                    <input type="text" placeholder='Digite seu email'/>
                    
                    <button>Continuar</button>

                    <ContainerLink>
                        <NavLink id='voltar' to="/login">Voltar para o Login</NavLink>
                    </ContainerLink>
                </ContainerLogin>    
            </Container>   
        </>
    )   
}

export default ForgotpassPage