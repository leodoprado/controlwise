import { useState } from 'react'
import { Container, ContainerLeft, ContainerContentLeft, ContainerRight } from './style'
import { FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import home from '../../../assets/home.svg'
import InputAccess from '../../../components/global/inputAccess'

const ForgotPassPage = () => {
  const [userEmail, setUserEmail] = useState('');

  return (
    <>
      <Container>
        <ContainerLeft>
          <ContainerContentLeft>
            <img src={logo} alt="Imagem" />
            <h1 className='titulo'>Recuperação de senha</h1>

            <form>
              <InputAccess
                label="Email"
                icon={FaEnvelope}
                placeholder="Informe seu email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </form>

            <button className='btnEntrar'>Recuperar</button>

            <h2 className='divider'>OU</h2>

            <NavLink to="/">Voltar para Login</NavLink>

          </ContainerContentLeft>
        </ContainerLeft>
        <ContainerRight>
          <img src={home} alt="Imagem" />
        </ContainerRight>
      </Container>
    </>
  )
}

export default ForgotPassPage
