import React from "react";
import Header from "../../../components/header";
import { Container, ContainerRegister, ContainerLogo, ContainerLink } from './style'
import Footer from "../../../components/footer";
import Logo from '../../../../assets/logo.png';

interface ToggleProps {

    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void

}

const checkInput = (event: React.MouseEvent<HTMLButtonElement>) =>  {
    let inputList = document.getElementsByClassName("input") as HTMLCollectionOf<HTMLInputElement>;
    let errorList = document.getElementsByClassName("error") as HTMLCollectionOf<HTMLElement>;

    for(let i = 0; i < inputList.length; i++) {
        let input = inputList[i];
        let error = errorList[i];
        if(input.value == "" /*se o input não tiver nada*/) {
            error.innerHTML = "não está preenchido!";
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
                    <a href="/">
                        <img src={Logo} alt="" />
                        <h1>Control Wise</h1>
                    </a>
                    </ContainerLogo>

                    <div className="label-register">
                        <label htmlFor="">Nome de Usuário</label>
                        <p id="user-error" className="error"></p>
                    </div>

                    <input type="text" className="input" placeholder='Digite seu nome de usuário'/>

                    <div className="label-register">
                        <label htmlFor="">Email</label>
                        <p id="email-error" className="error"></p>
                    </div>
                    
                    <input type="text" className="input" placeholder='Digite seu email'/>

                    <div className="label-register">
                        <label htmlFor="">Senha</label>
                        <p id="password-error" className="error"></p>
                    </div>
                    
                    <input type="password" className="input" placeholder='Digite sua senha'/>
                    
                    <div className="label-register">
                        <label htmlFor="">Telefone</label>
                        <p id="phone-error" className="error"></p>
                    </div>

                    <input type="tel" id="phone" name="phone" className="input" data-mask="(00) 0000-0000" data-mask-selectonfocus="true"/>
                    <button onClick={checkInput}>Registrar</button>
                </ContainerRegister>
            </Container>
        </>
    )
}