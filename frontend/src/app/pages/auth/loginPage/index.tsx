import React, { useCallback, useEffect } from 'react'
import {TypeOf, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { FormProps, NavLink } from 'react-router-dom';
import axios from 'axios';


import { Container, ContainerLogin, ContainerLogo, ContainerInput, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'
import ButtonAccessDefault from '../../../components/buttonAccessDefault';
import InputAccessDefault from '../../../components/inputAccessDefault';

export const loginUserFormSchema = z.object({
    address: z.object({
        email: z.string()
        .nonempty('Digite seu e-mail cadastrado!')
        .email('Formato de e-mail inválido!'),
        password: z.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres!')
    })
})
.transform((field) => ({
    address: {
        email: field.address.email,
        password: field.address.password
    }
}));

type LoginUserFormData = z.infer<typeof loginUserFormSchema>

const LoginPage = () => {
  const { 
    register, 
    handleSubmit,
    watch, 
    setValue,
    formState: { errors } 
    } = useForm<LoginUserFormData> ({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(loginUserFormSchema),
        defaultValues: {
            address: {
                email: '',
                password: ''
            }
        }   
    })

    const handleFormSubmit = async (data: LoginUserFormData) => {
        console.log(data.address.email)
        console.log(data.address.password)

        const result = await handleFetchAddress(data.address.email, data.address.password);

        if(result != null) {
            alert("Seja bem vindo! " + result.USR_NOME);
        }

      }

  const email = watch('address.email');
  const password = watch('address.password')

  const handleFetchAddress = useCallback(async (email: string, password: string) => {
    const { data } = await axios.get(
        'http://localhost:3000/usuario/', { data: { USR_EMAIL: email, USR_SENHA: password } } // <= endpoint para a validação do email de login
        );
        return data[0];
  }, [])

  useEffect(() => {
    if(email != '' && password != '') return;

    handleFetchAddress(email, password).then((result) =>{
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
  }, [handleFetchAddress, email])

  

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
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <ContainerInput>                       
                        <input 
                            type="text" 
                            className="input"
                            placeholder='Digite seu email'
                            {...register('address.email')}
                        />
                        {errors.address?.email?.message && (
                            <span>{errors.address.email.message}</span> 
                        )}
                        
                    </ContainerInput> 

                    <ContainerInput>                
                        <input 
                            {...register('address.password')}
                            placeholder='Digite sua senha'
                            type="text" 
                            className="input"
                        />
                        {errors.address?.password?.message && (
                            <span>{errors.address.password.message}</span> 
                        )}
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