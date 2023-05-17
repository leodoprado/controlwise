import React from 'react'
import {TypeOf, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { Validator } from 'react';

import { Container, ContainerRegister, ContainerLogo, ContainerInput, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png';

const registerUserFormSchema = z.object({
    email: z.string()
        .nonempty('Digite seu e-mail para realizar o cadastro!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres!'),
    phone: z.string()
        .nonempty('Digite seu telefone para realizar o cadastro!')
        .min(11, 'Número de telefone inválido!')
        .max(11, 'Número de telefone inválido!')
})

type registerUserFormData = z.infer<typeof registerUserFormSchema>

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<registerUserFormData> ({
        resolver: zodResolver(registerUserFormSchema),
    })

    function registerUser(data : any){
        console.log(data)
    }

    return(
        <>
            <Container>
                <ContainerRegister>
                    <ContainerLogo>
                        <NavLink to="/">
                            <img src={Logo} alt="" />
                            <h1>Control Wise</h1>
                        </NavLink>
                    </ContainerLogo>
                    <form onSubmit={handleSubmit(registerUser)}>
                        <ContainerInput>
                            <label htmlFor="">E-mail</label>     
                            <input type="text" className="input" placeholder='Digite seu e-mail' { ...register('email') }/>
                            {errors.email && <span>{errors.email.message}</span>}
                        </ContainerInput>

                        <ContainerInput>
                            <label htmlFor="">Senha</label>
                            <input type="password" className="input" placeholder='Digite sua senha' { ...register('password') } />
                            {errors.password && <span>{errors.password.message}</span>}
                        </ContainerInput>
                        
                        <ContainerInput>
                            <label htmlFor="">Telefone</label>
                            <input type="tel" placeholder="Digite seu telefone"  { ...register('phone') } />
                            {errors.phone && <span>{errors.phone.message}</span>}
                        </ContainerInput>
        
                        <button type='submit'>Registrar</button>
                    </form>
                    <ContainerLink>
                        <NavLink to="/login" id="login">Já possui uma conta? Faça o Login</NavLink>    
                    </ContainerLink>
                </ContainerRegister>
            </Container>
        </>
    )
}