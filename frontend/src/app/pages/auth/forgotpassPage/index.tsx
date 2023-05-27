import React from "react";
import {TypeOf, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";
import { Container, ContainerLogin, ContainerLogo, ContainerInput, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'
import ButtonAccessDefault from "../../../components/buttonAccessDefault";

const forgotPassFormSchema = z.object({
    input: z.string()
        .nonempty('Digite seu e-mail ou telefone cadastrado!')
})

type forgotPassFormSchema = z.infer<typeof forgotPassFormSchema>

const ForgotpassPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<forgotPassFormSchema> ({
        resolver: zodResolver(forgotPassFormSchema),
    })

    function forgotPass(data : any){
        console.log(data)
    }

    return (
        <>
            <Container>
                <ContainerLogin>
                    <ContainerLogo>
                        <NavLink to="/">
                            <img src={Logo} alt="" />
                            <h1>Control Wise</h1>
                        </NavLink>
                    </ContainerLogo>     

                    <h1>Recupere seu e-mail / senha</h1>
                    <form onSubmit={handleSubmit(forgotPass)}>
                        <ContainerInput>
                            <label htmlFor="">Número de telefone ou e-mail</label>
                            <input type="text" placeholder='Digite seu número de telefone ou e-mail' { ...register('input') }/>
                            {errors.input && <span>{errors.input.message}</span>}
                        </ContainerInput>

                        <ButtonAccessDefault typeButton="submit" titleButton="Continuar"/>
                    </form>

                    <ContainerLink>
                        <NavLink id='voltar' to="/login">Voltar para o Login</NavLink>
                    </ContainerLink>
                </ContainerLogin>    
            </Container>   
        </>
    )   
}

export default ForgotpassPage