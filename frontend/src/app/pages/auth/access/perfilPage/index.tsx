import React from "react";
import HeaderAuth from "../../../../components/headerAuth";
import { ContainerMain, ContainerContent, ContainerInput } from './style'

const PerfilPage = () => {
    return (
      <>
        <HeaderAuth />
        <ContainerMain>
          <ContainerInput>
            <label htmlFor="#">Nome</label>
            <input type="text" required/>
          </ContainerInput>
        
        </ContainerMain>
      </>
    )
}

export default PerfilPage;