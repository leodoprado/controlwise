import { useEffect, useState } from "react";
import Header from "../../../components/global/header";
import Footer from "../../../components/global/footer";
import { Container, ContainerSignUp, ContainerTitulo, ContainerInput, ContainerLink } from "./style";
import { NavLink } from "react-router-dom";
import ButtonAccessDefault from "../../../components/global/buttonAccessDefault";

import * as z from 'zod'
import { userMutation } from "../../../hooks/userMutation";

const newUserFormSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
})

const SignUpPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { mutate } = userMutation()

    const submit = () => {
        const data = {
            name,
            email,
            password
        }
        mutate(data)
    }

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };
    
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <Header />
            <Container>
                <ContainerSignUp>
                    <ContainerTitulo>
                        <h1>Realize seu cadastro</h1>
                    </ContainerTitulo>
                    <form>
                        <ContainerInput>
                            <input
                                type='text' 
                                placeholder='Digite seu Nome'
                                required  
                                onChange={handleName}
                                value={name}      
                            />
                            <input
                                type='text'
                                placeholder='Digite seu E-mail'
                                required
                                onChange={handleEmail}
                                value={email}
                            />
                            <input
                                type='password'
                                placeholder='Digite sua Senha'
                                required
                                onChange={handlePassword}
                                value={password}
                            />
                        </ContainerInput>
                    </form>
                    <ButtonAccessDefault titleButton="Registrar" onClick={submit}></ButtonAccessDefault>

                    <ContainerLink>
                        <NavLink to="/askchat">Já possui uma conta? Faça o login</NavLink>
                    </ContainerLink>

                </ContainerSignUp>
            </Container>
            <Footer />
        </>
    )
}

export default SignUpPage