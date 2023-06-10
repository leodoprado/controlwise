import React from 'react'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { ContainerMain, ContainerContent, ContainerImage } from './style'
import axios from 'axios'
import InfoImage from '../../../../assets/img-info.png'
import UserList from '../../../components/apiCoin'
import { NavLink } from 'react-router-dom'

const InfoPage: React.FC = () => {


    return (
        <>
            <Header/>
            <ContainerMain>
                <ContainerContent>
                    <UserList/>
                    <NavLink to="/ajuda">Central de Ajuda</NavLink>
                </ContainerContent>
                <ContainerImage>
                    <img src={InfoImage} alt="Imagem Info"></img>
                </ContainerImage>
            </ContainerMain>
            <Footer/>
        </>
    )
}

export default InfoPage