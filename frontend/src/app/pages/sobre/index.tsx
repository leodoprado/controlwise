import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ContainerMain, ContainerContent } from "./style";


const SobrePage = () => {
    return (
        <>
            <Header />
                <ContainerMain>
                    <ContainerContent>
                    <div id="infoBox">
                        <h1>
                            Sobre
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed velit in purus elementum eleifend. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames. 
                        </p> 
                    </div>
                    </ContainerContent>
                </ContainerMain>
            <Footer />
        </>
    )
}

export default SobrePage