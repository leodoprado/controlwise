import React from 'react'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { ContainerMain } from '../Home/style'

const HomePage = () => {
  return (
    <>
        <Header />
        <ContainerMain>
          <div id="div-main">
            <h1>A sua solução de negócio</h1>
            <button>Começe já!</button>
          </div>
        </ContainerMain>
        <Footer />
    </>
  )
}

export default HomePage