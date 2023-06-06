import React from 'react'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { ContainerMain, ContainerContent, ContainerImage } from '../homePage/style'
import { NavLink } from 'react-router-dom'
import HomeImage from '../../../../assets/img-inicio2.png'

const HomePage = () => {
  return (
    <>
        <Header />
        <ContainerMain>
          <ContainerContent>
            <h1>Análise inteligente e eficaz do presente e futuro das suas finanças!</h1>
            <NavLink to="/sobre">Saiba Mais</NavLink>
          </ContainerContent>
          <ContainerImage>
            <img src={HomeImage} alt="Imagem Main"></img>
          </ContainerImage>
        </ContainerMain>
        <Footer />
    </>
  )
}

export default HomePage