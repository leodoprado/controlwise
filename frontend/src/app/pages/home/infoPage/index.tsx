import React from 'react'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { ContainerMain, ContainerContent } from './style'
import axios from 'axios'
import UserList from '../../../components/apiCoin'

const InfoPage: React.FC = () => {


    return (
        <>
            <Header/>
                <ContainerMain>
                    <ContainerContent>
                        <div id="infoBox">
                            <h1>
                                Info
                            </h1>
                           <UserList/>
                        </div>
                    </ContainerContent>
                </ContainerMain>
            <Footer/>
        </>
    )
}

export default InfoPage