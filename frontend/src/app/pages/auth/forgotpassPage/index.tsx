import React from "react";
import { Container, ContainerLogin, ContainerLogo, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'

const ForgotpassPage = () => {
    return (
        <>
            <Container>
                <ContainerLogin>
                    <ContainerLogo>
                        <a href="/">
                            <img src={Logo} alt="" />
                            <h1>Control Wise</h1>
                        </a>
                    </ContainerLogo>     

                    <h1>Recupere seu e-mail / senha</h1>

                    <label htmlFor="">Número de telefone ou e-mail</label>
                    <input type="text" placeholder='Digite seu email'/>
                    
                    <button>Continuar</button>

                    <ContainerLink>
                        <a id='voltar' href="/login">Voltar para o Login</a>
                    </ContainerLink>
                </ContainerLogin>    
            </Container>   
        </>
    )   
}

export default ForgotpassPage