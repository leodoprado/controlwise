import { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import home from '../../../assets/home.svg'
import logo from '../../../assets/logo.svg'
import InputAccess from '../../../components/global/inputAccess'
import {
  Container,
  ContainerContentLeft,
  ContainerLeft,
  ContainerRight,
} from './style'

const SignInPage = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPass, setUserPass] = useState('')

  return (
    <>
      <Container>
        <ContainerLeft>
          <ContainerContentLeft>
            <img src={logo} alt="Imagem" />

            {/* Adicionando os botões de Login e Cadastro */}
            <div className="btnLinks">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? 'btnAcesso active' : 'btnAcesso'
                }
              >
                Entrar
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? 'btnAcesso active' : 'btnAcesso'
                }
              >
                Cadastrar
              </NavLink>
            </div>

            <form>
              <InputAccess
                label="Email"
                icon={FaEnvelope}
                placeholder="Informe seu email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
              />

              <InputAccess
                label="Senha"
                icon={FaLock}
                placeholder="Informe sua senha"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                type="password"
              />
            </form>

            {/* <NavLink className='forgotpass' to="/forgotpass">Esqueceu sua senha?</NavLink> */}

            <button className="btnEntrar">Entrar</button>

            {/* <h2 className='divider'>OU</h2> */}

            {/* <button className='btnEntrar'><FaGoogle />Entrar com google</button> */}
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
