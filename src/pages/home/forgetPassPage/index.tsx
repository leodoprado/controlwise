import React from "react";
import Header from "../../../components/global/header";
import Footer from "../../../components/global/footer";
import ButtonAccessDefault from "../../../components/global/buttonAccessDefault";
import { NavLink } from "react-router-dom";
import { Container, ContainerContent, ContainerTitulo, ContainerInput, ContainerLink } from "./style";

const ForgotPassPage = () => {
    return (
        <>
            <Header/>
            <Container>
                <ContainerContent>
                    <ContainerTitulo>
                        <h1>Recupere sua senha</h1>
                    </ContainerTitulo>

                    <form action="#">
                        <ContainerInput>
                            <input
                                type='text'
                                className='input'
                                placeholder='Digite seu E-mail'
                            />
                        </ContainerInput>
                        <ButtonAccessDefault typeButton='submit' titleButton='Enviar' />
                    </form>
                    <ContainerLink>
                        <NavLink id='esqueceu-senha' to="/">Lembra da sua senha? Faça o login</NavLink>
                    </ContainerLink>
                </ContainerContent>
            </Container>
            <Footer/>
        </>
    )
}

export default ForgotPassPage