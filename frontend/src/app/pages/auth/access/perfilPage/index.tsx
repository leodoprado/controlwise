import React, {useState} from "react";
import HeaderAuth from "../../../../components/headerAuth";
import { ContainerMain, ContainerLeft, ContainerRight, ContainerInput } from './style'

import Input from "../../../../components/inputText";
import ProfilePicturePreview from "../../../../components/inputProfilePicture";
const PerfilPage = () => {
    const [name, setName] = useState('');

    const handleNameChange = (value: string) => {
      setName(value);
    };
    return (
      <>
        <HeaderAuth />
        <ContainerMain>
          <form action="" method="post">
          <ContainerLeft>
            <ContainerInput> 
              <label htmlFor="">Nome</label>
              <input type="text" />

              <label htmlFor="">CPF</label>
              <input type="text" />

              <label htmlFor="">E-mail</label>
              <input type="text" />

            </ContainerInput>
          </ContainerLeft>         
          <ContainerRight>
            <ContainerInput>
              <label htmlFor="">Data de Nascimento</label>
              <input id="inputDate" type="date" />

              <label htmlFor="">RG</label>
              <input type="text" /> 

              <label htmlFor="">Telefone</label>
              <input type="text" />

            </ContainerInput>
          </ContainerRight>
          </form>
        </ContainerMain>
      </>
    )
}

export default PerfilPage;