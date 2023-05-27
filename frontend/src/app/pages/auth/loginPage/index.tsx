import React from 'react'
import {TypeOf, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { Container, ContainerLogin, ContainerLogo, ContainerInput, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'
import ButtonAccessDefault from '../../../components/buttonAccessDefault';
import InputAccessDefault from '../../../components/inputAccessDefault';
import { loginUserFormSchema } from '../../../../core/hooks/validations';

type LoginUserFormData = z.infer<typeof loginUserFormSchema>

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginUserFormData> ({
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
                        <label htmlFor="">E-mail</label>                        

                        <InputAccessDefault typeInput='text' placeholderInput='Digite seu e-mail' classNameInput='input' { ...register('email') }/>
                        {errors.email && <span>{errors.email.message}</span>}
                    </ContainerInput> 

                    <ContainerInput>
                        <label htmlFor="">Senha</label>                  
                        <InputAccessDefault typeInput="password" placeholderInput='Digite sua senha' classNameInput="input" { ...register('password') }/>
                        {errors.password && <span>{errors.password.message}</span>}
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