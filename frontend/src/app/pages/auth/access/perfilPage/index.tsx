import React from "react";
import HeaderAuth from "../../../../components/headerAuth";
import { ContainerMain, ContainerLeft, ContainerRight, ContainerInput } from './style'

import Input from "../../../../components/inputText";

const PerfilPage = () => {
    return (
      <>
        <HeaderAuth />
        <ContainerMain>
          <ContainerLeft>
            <Input 
              name="Seila"
              placeholder="nome"/>  
          </ContainerLeft>         
          <ContainerRight>
            <ContainerInput>
              <label htmlFor="">E-mail</label>
              <input type="text" />
            </ContainerInput>
          </ContainerRight>
        </ContainerMain>
      </>
    )
}

export default PerfilPage;