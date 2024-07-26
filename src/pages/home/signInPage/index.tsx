import { useState } from 'react'
import { Container, ContainerLeft, ContainerContentLeft, ContainerRight } from './style'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import home from '../../../assets/home.svg'
import InputAccess from '../../../components/global/inputAccess'

const SignInPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  return (
    <>
      <Container>
        <ContainerLeft>
          <ContainerContentLeft>
            <img src={logo} alt="Imagem" />
            <h1 className='titulo'>Acesse sua conta</h1>

            <form>
              <InputAccess
                label="Email"
                icon={FaEnvelope}
                placeholder="Informe seu email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />

              <InputAccess
                label="Senha"
                icon={FaLock}
                placeholder="Informe sua senha"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
              />
            </form>

            <NavLink to="/forgotpass">Esqueceu sua senha?</NavLink>

            <button className='btnEntrar'>Entrar</button>

            <h2 className='divider'>OU</h2>

            <NavLink to="/signup" className="btnCadastrar">Cadastrar</NavLink>

          </ContainerContentLeft>
        </ContainerLeft>
        <ContainerRight>
          <img src={home} alt="Imagem" />
        </ContainerRight>
      </Container>
    </>
  )
}

export default SignInPage
