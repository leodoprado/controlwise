import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { Container, ContainerSignUp, ContainerTitulo, ContainerInput, ContainerLink } from "./style";
import { NavLink } from "react-router-dom";
import ButtonAccessDefault from "../../../components/buttonAccessDefault";

const SignUpPage = () => {
    return (
        <>
            <Header />
            <Container>
                <ContainerSignUp>
                    <ContainerTitulo>
                        <h1>- Realize seu cadastro -</h1>
                    </ContainerTitulo>
                    <form>
                        <ContainerInput>
                            <input
                                type='text'
                                className='input'
                                placeholder='Digite seu Nome'
                            />
                            <input
                                type='text'
                                className='input'
                                placeholder='Digite seu CPF'
                            />
                            <input
                                type='text'
                                className='input'
                                placeholder='Digite seu E-mail'
                            />
                            <input
                                type='password'
                                className='input'
                                placeholder='Digite sua Senha'
                            />
                        </ContainerInput>

                        <ButtonAccessDefault typeButton='submit' titleButton='Registrar' />
                    </form>

                    <ContainerLink>
                        <NavLink to="/">Já possui uma conta? Faça o login</NavLink>
                    </ContainerLink>

                </ContainerSignUp>
            </Container>
            <Footer />
        </>
    )
}

export default SignUpPage