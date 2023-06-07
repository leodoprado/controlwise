import React from 'react'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { ContainerMain, ContainerContent } from './style'
import axios from 'axios'

const InfoPage = () => {

    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&apiKey`)
    .then(response => {
        // Manipule a resposta da API aqui
        console.log(response.data);
    })
    .catch(error => {
        // Lida com erros aqui
        console.error(error);
    });

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