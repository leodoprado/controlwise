import React from 'react'
import { Container, ContainerLogin, ContainerLogo, ContainerLink } from './style'
import Logo from '../../../../assets/logo.png'
import {TypeOf, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';

const loginUserFormSchema = z.object({
    email: z.string()
        .nonempty('Digite seu e-mail cadastrado!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres!')
})

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
                    <a href="/perfil">
                        <img src={Logo} alt="" />
                        <h1>Control Wise</h1>
                    </a>
                </ContainerLogo>     
                <form onSubmit={handleSubmit(loginUser)}>
                    <div className="label-login">
                        <label htmlFor="">Email</label>
                        <p id="email-error" className="error"></p>
                    </div>
                    
                    
                    <input type="text" placeholder='Digite seu email' className="input" { ...register('email') }/>
                    {errors.email && <span>{errors.email.message}</span>}
                    
                    <div className="label-login">
                        <label htmlFor="">Senha</label>
                        <p id="password-error" className="error"></p>
                    </div>

                    <input type="password" placeholder='Digite sua senha' className="input"/>
                    
                    <button type='submit'>Login</button>
                </form>
                <ContainerLink>
                    <a id='cadastre-se' href="/register">Não tem uma conta? Cadastre-se</a>
                    <a id='esqueceu-senha' href="/forgotpass">Esqueceu sua senha?</a>
                </ContainerLink>
            </ContainerLogin>    
        </Container>   
    </>
  )
}

export default LoginPage