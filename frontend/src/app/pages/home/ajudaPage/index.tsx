import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import {ContainerMain, ContainerContent, ContainerTittle, ContainerInput, ContainerButton} from './style';
import { NavLink } from "react-router-dom";
import Dropbox from "../../../components/dropBoxAjuda";


const AjudaPage = () => {
    return (
        <>
            <Header/>
            <ContainerMain>
                <ContainerContent>
                    <ContainerTittle>Como podemos te ajudar?</ContainerTittle>
                    <ContainerInput>
                        <label htmlFor="">Nome <input type="text" placeholder="Informe seu nome"/></label>
                        <label htmlFor="">E-mail <input type="text" placeholder="Informe seu e-mail principal"/></label>
                        <label htmlFor="">Telefone <input type="text" placeholder="Informe seu telefone de contato"/></label>
                        <label htmlFor="">Qual sua dúvida? <textarea id="input"/></label>

                        <button>Enviar</button>
                    </ContainerInput>
                </ContainerContent>
            </ContainerMain>
            <Footer/>
        </>
    )
}

export default AjudaPage;