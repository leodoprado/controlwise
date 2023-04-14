import React from 'react'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { ContainerMain, ContainerContent } from '../Home/style'

const HomePage = () => {
  return (
    <>
        <Header />
        <ContainerMain>
          <ContainerContent>
            <h1>A sua solução de negócio</h1>
            <button>Começe já!</button>
          </ContainerContent>
        </ContainerMain>
        <Footer />
    </>
  )
}

export default HomePage