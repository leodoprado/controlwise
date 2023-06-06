import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { ContainerMain, ContainerContent, ContainerImage } from "./style";
import AboutImage from '../../../../assets/imagem-sobre.png'


const SobrePage = () => {
    return (
        <>
            <Header />
                <ContainerMain>
                <ContainerImage>
                    <img src={AboutImage} alt="Imagem Main"></img>
                </ContainerImage>
                    <ContainerContent>
                        <h1>Sobre suas funções!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolore quibusdam sequi porro hic recusandae corporis, nisi dolores officia ipsum enim, maiores architecto nemo tempora? Quisquam dicta expedita culpa enim? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro corrsasaupti sapiente beatae ut obcaecati veniam ad nulla expedita consectetur perferendis praesentium, aliquam aperiam reprehenderit quisquam repellat earum sed. Labore, cum. Lore</p>
                        <button>Receba mais informações!</button>
                    </ContainerContent>
                </ContainerMain>
            <Footer />
        </>
    )
}

export default SobrePage