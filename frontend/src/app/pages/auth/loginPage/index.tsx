import React from 'react'
import { Container, ContainerLogin, ContainerLogo, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'

const LoginPage = () => {
  return (
    <>
        <Container>
            <ContainerLogin>
                <ContainerLogo>
                    <a href="/perfil">
                        <img src={Logo} alt="" />
                        <h1>Control Wise</h1>
                    </a>
                </ContainerLogo>     
                
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Digite seu email'/>
                <label>Senha</label>
                <input type="password" placeholder='Digite sua senha'/>
                
                <button>Login</button>
                <ContainerLink>
                    <a id='cadastre-se' href="/register">Não tem uma conta? Cadastre-se</a>
                    <a id='esqueceu-senha' href="/forgotpass">Esqueceu sua senha?</a>
                </ContainerLink>
            </ContainerLogin>    
        </Container>   
    </>
  )
}

export default LoginPage