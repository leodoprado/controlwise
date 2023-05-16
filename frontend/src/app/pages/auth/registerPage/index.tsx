import React from "react";
import { Container, ContainerRegister, ContainerLogo, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png';
import { NavLink } from "react-router-dom";

interface ToggleProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const checkInput = () =>  {
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

    //console.log("SEVERINO", inputList);
}

export default function RegisterPage() {
    return(
        <>
            <Container>
                <ContainerRegister>
                    <ContainerLogo>
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                        <h1>Control Wise</h1>
                    </NavLink>
                    </ContainerLogo>
                    <div className="label-register">
                        <label htmlFor="">Email</label>
                        <p id="email-error" className="error"></p>
                    </div>
                    
                    <input type="text" className="input" placeholder='Digite seu email' required/>

                    <div className="label-register">
                        <label htmlFor="">Senha</label>
                        <p id="password-error" className="error"></p>
                    </div>
                    
                    <input type="password" className="input" placeholder='Digite sua senha' required/>
                    
                    <div className="label-register">
                        <label htmlFor="">Telefone</label>
                        <p id="phone-error" className="error"></p>
                    </div>

                    <input type="tel" id="phone" name="phone" placeholder="Digite seu telefone" className="input" data-mask="(00) 0000-0000" data-mask-selectonfocus="true" required/>
                    <button onClick={checkInput}>Registrar</button>
                    <ContainerLink>
                        <NavLink to="/login" id="login">Já possui uma conta? Faça o Login</NavLink>    
                    </ContainerLink>
                </ContainerRegister>
            </Container>
        </>
    )
}