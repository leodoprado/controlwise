import React from 'react'
import {TypeOf, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { Container, ContainerLogin, ContainerLogo, ContainerInput, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'
import ButtonAccessDefault from '../../../components/buttonAccessDefault';
import InputAccessDefault from '../../../components/inputAccessDefault';

export const loginUserFormSchema = z.object({
    email: z.string()
        .nonempty('Digite seu e-mail cadastrado!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres!')
})

type LoginUserFormData = z.infer<typeof loginUserFormSchema>

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginUserFormData> ({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginUserFormSchema),
  })

  function loginUser(data : any){
    console.log(data)
  }

  return (
    <>
        <Container>
            <ContainerLogin>
                <ContainerLogo>
                    <NavLink to="/perfil">
                        <img src={Logo} alt="" />
                        <h1>Control Wise</h1>
                    </NavLink>
                </ContainerLogo>     
                <form onSubmit={handleSubmit(loginUser)}>
                    <ContainerInput>                       
                        <InputAccessDefault 
                            {...register('email')}
                            textLabel='E-mail' 
                            typeInput='text' 
                            placeholderInput='Digite seu e-mail' 
                            classNameInput='input'
                            helperText={errors.email?.message}
                        />
                        
                    </ContainerInput> 

                    <ContainerInput>                
                        <InputAccessDefault 
                            {...register('password')}
                            textLabel='Senha' 
                            typeInput="password" 
                            placeholderInput='Digite sua senha' 
                            classNameInput="input"
                            helperText={errors.password?.message}
                        />
                    </ContainerInput>
                    
                    <ButtonAccessDefault typeButton='submit' titleButton='Login'/>
                </form>
                <ContainerLink>
                    <NavLink id='cadastre-se' to="/register">Não tem uma conta? Cadastre-se</NavLink>
                    <NavLink id='esqueceu-senha' to="/forgotpass">Esqueceu sua senha?</NavLink>
                </ContainerLink>
            </ContainerLogin>    
        </Container>   
    </>
  )
}

export default LoginPage