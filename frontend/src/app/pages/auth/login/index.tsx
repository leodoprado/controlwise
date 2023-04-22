import React from 'react'
import { Container, ContainerLogin, ContainerLogo, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'

const LoginPage = () => {
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
                <h1></h1>

                <label htmlFor="">Email</label>
                <input type="text" placeholder='Digite seu email'/>
                <label>Senha</label>
                <input type="password" placeholder='Digite sua senha'/>
                
                <button>Login</button>
                <ContainerLink>
                    <a id='cadastre-se' href="#">Cadastre-se</a>
                    <a id='esqueceu-senha' href="/access">Esqueceu sua senha?</a>
                </ContainerLink>
            </ContainerLogin>    
        </Container>   
    </>
  )
}

export default LoginPage