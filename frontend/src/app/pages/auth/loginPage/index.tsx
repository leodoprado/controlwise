import React from 'react'
import { Container, ContainerLogin, ContainerLogo, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'

interface ToggleProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const checkInput = () => {
    let inputList = document.getElementsByClassName("input") as HTMLCollectionOf<HTMLInputElement>;
    let errorList = document.getElementsByClassName("error") as HTMLCollectionOf<HTMLElement>;


    for(let i = 0; i < inputList.length; i++) {
        let input = inputList[i];
        let error = errorList[i];
        if(input.value == "") {
            error.innerHTML = "campo obrigatório!";
        }
        else {
            error.innerHTML = ""
            
        }
    }

}

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
                
                <div className="label-login">
                    <label htmlFor="">Email</label>
                    <p id="email-error" className="error"></p>
                </div>
                
                
                <input type="text" placeholder='Digite seu email' className="input"/>
                
                <div className="label-login">
                    <label htmlFor="">Senha</label>
                    <p id="password-error" className="error"></p>
                </div>

                <input type="password" placeholder='Digite sua senha' className="input"/>
                
                <button onClick={checkInput}>Login</button>
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