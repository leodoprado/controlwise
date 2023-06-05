import React, {useState} from "react";
import HeaderAuth from "../../../../components/headerAuth";
import { ContainerMain, ContainerLeft, ContainerRight, ContainerInput, ContainerContent, ContainerButton } from './style'

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
          <section>Dados da Conta</section>
          <ContainerContent>
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
          </ContainerContent>

          <section>Endereço</section>
          <ContainerContent>
            <ContainerLeft>
              <ContainerInput>
                <label htmlFor="">Cidade</label>
                <input type="text" />

                <label htmlFor="">Endereço</label>
                <input type="text" />

                <label htmlFor="">Referência</label>
                <input type="text" />

              </ContainerInput>
            </ContainerLeft>         
            <ContainerRight>
              <ContainerInput>
                <label htmlFor="">CEP</label>
                <input type="text" />

                <label htmlFor="">Bairro</label>
                <input type="text" /> 

                <label htmlFor="">Complemento</label>
                <input type="text" />
              </ContainerInput>
            </ContainerRight>
          </ContainerContent>
          <ContainerButton><button>Salvar</button></ContainerButton>
          </form>
        </ContainerMain>
      </>
    )
}

export default PerfilPage;