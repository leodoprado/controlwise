import { useEffect } from "react";
import Header from "../../../components/global/header";
import Footer from "../../../components/global/footer";
import { Container, ContainerSignUp, ContainerTitulo, ContainerInput, ContainerLink } from "./style";
import { NavLink } from "react-router-dom";
import ButtonAccessDefault from "../../../components/global/buttonAccessDefault";

import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Yup
import { Schema, object, string } from "yup"

import { useMutation } from "@tanstack/react-query";
import { useContextSelector } from "use-context-selector";
import { UsersContext } from "../../../contexts/UserContext";

const newUserFormSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
})

type newUserFormInputs = z.infer<typeof newUserFormSchema>

const SignUpPage = () => {

    const createUser = useContextSelector(
        UsersContext,
        (context) => {
          return context.createUser
        },
    )

    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: {isSubmitting, errors} 
    } = useForm<newUserFormInputs>({ resolver: zodResolver(newUserFormSchema) });

    async function handleCreateNewUser(data: newUserFormInputs) {
        const { name, email, password } = data
    
        await createUser({ name, email, password })
    
        reset()
    }

    return (
        <>
            <Header />
            <Container>
                <ContainerSignUp>
                    <ContainerTitulo>
                        <h1>Realize seu cadastro</h1>
                    </ContainerTitulo>
                    <form onSubmit={handleSubmit(handleCreateNewUser)}>
                        <ContainerInput>
                            <input
                                type='text' 
                                className={`input ${errors.name ? 'error' : ''}`}
                                placeholder='Digite seu Nome'
                                {...register("name")}
                                required        
                            />
                            <input
                                type='text'
                                className={`input ${errors.email ? 'error' : ''}`}
                                placeholder='Digite seu E-mail'
                                {...register("email")}
                                required
                            />
                            <input
                                type='password'
                                className={`input ${errors.password ? 'error' : ''}`}
                                placeholder='Digite sua Senha'
                                {...register("password")}
                                required
                            />
                        </ContainerInput>

                        <ButtonAccessDefault typeButton='submit' titleButton='Registrar' disabled={isSubmitting}/>
                    </form>

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