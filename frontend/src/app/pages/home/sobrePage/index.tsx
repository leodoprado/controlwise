import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { ContainerMain, ContainerContent, ContainerImage } from "./style";
import AboutImage from '../../../../assets/imagem-sobre.png'
import { NavLink } from "react-router-dom";


const SobrePage = () => {
    return (
        <>
            <Header />
                <ContainerMain>
                <ContainerImage>
                    <img src={AboutImage} alt="Imagem Main"></img>
                </ContainerImage>
                    <ContainerContent>
                        <h1>Sobre o projeto!</h1>
                        <p>Plataforma online de gestão financeira, capaz de ajudar a pessoa física de forma fácil, eficiente e organizada a calcular suas rendas e despesas no fim do mês, impactando de forma positiva no seu bem estar financeiro.</p>
                        <NavLink to="/info">Receba mais Informações</NavLink>
                    </ContainerContent>
                </ContainerMain>
            <Footer />
        </>
    )
}

export default SobrePage