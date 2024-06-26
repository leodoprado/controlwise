import React from 'react'
import Header from '../../../components/global/header'
import Footer from '../../../components/global/footer'
import { Container, ContainerLogin, ContainerTitulo, ContainerInput, ContainerLink, ContainerLeft, ContainerRight } from './style'
import { NavLink } from 'react-router-dom'
import ButtonAccessDefault from '../../../components/global/buttonAccessDefault'

const SignInPage = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerLogin>
            <ContainerTitulo>
              <h1>Acesse a plataforma</h1>
            </ContainerTitulo>
            
            <form>
              <ContainerInput>
                <input
                  type='text'
                  className='input'
                  placeholder='Digite seu E-mail'
                  required
                />
                <input
                  type='password'
                  className='input'
                  placeholder='Digite sua Senha'
                  required
                />

                <NavLink id='esqueceu-senha' to="/forgotpass">Esqueceu sua senha?</NavLink>
              </ContainerInput>

              <ButtonAccessDefault typeButton='submit' titleButton='Entrar' />
            </form>

            <ContainerLink>
              <NavLink id='esqueceu-senha' to="/signup">Ainda não tem uma conta? Cadastre-se</NavLink>
            </ContainerLink>
        </ContainerLogin>
      </Container>
      <Footer />
    </>
  )
}

export default SignInPage