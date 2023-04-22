import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { ContainerMain, ContainerContent } from './style'

const InfoPage = () => {
    return (
        <>
            <Header/>
                <ContainerMain>
                    <ContainerContent>
                        <div id="infoBox">
                            <h1>
                                Info
                            </h1>
                            <p>
                                Control Wise é um sistema voltado para a representação clara e visual dos dados Financeiros da empresa, com foco em 
                                pequenos negócios, facilitando a representação estatistica de valores essenciais para previsionar sua saúde financeira.
                            </p> 
                        </div>
                    </ContainerContent>
                </ContainerMain>
            <Footer/>
        </>
    )
}

export default InfoPage