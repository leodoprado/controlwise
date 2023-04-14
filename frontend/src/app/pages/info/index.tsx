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
                                ControlWise é um sistema de gerênciamento estratégico empresarial com foco na 
                                representação estatistica de valores Financeiros de diversas corporações.
                            </p> 
                        </div>
                    </ContainerContent>
                </ContainerMain>
            <Footer/>
        </>
    )
}

export default InfoPage