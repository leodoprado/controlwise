import React from 'react'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { ContainerMain, ContainerContent, ContainerImage } from '../Home/style'
import HomeImage from '../../../../assets/img-inicio2.png'

const HomePage = () => {
  return (
    <>
        <Header />
        <ContainerMain>
          <ContainerContent>
            <h1>A sua solução de negócio</h1>
            <button>Comece já!</button>
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