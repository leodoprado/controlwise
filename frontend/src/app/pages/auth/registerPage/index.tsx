import React from 'react'
import {TypeOf, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { Container, ContainerRegister, ContainerLogo, ContainerInput, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png';

const registerUserFormSchema = z.object({
    email: z.string()
        .nonempty('Digite seu e-mail cadastrado!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres!')
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

                            <input type="text" className="input" placeholder='Digite seu e-mail' required/>
                        </ContainerInput>

                        
                        <label htmlFor="">Senha</label>
                        <input type="password" className="input" placeholder='Digite sua senha' required/>
                        
                        <div className="label-register">
                            <label htmlFor="">Telefone</label>
                            <p id="phone-error" className="error"></p>
                        </div>

                        <input type="tel" id="phone" name="phone" placeholder="Digite seu telefone" className="input" data-mask="(00) 0000-0000" data-mask-selectonfocus="true" required/>
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