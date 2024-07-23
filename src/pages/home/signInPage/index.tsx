import { Container, ContainerLeft, ContainerContentLeft, ContainerRight } from './style'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import home from '../../../assets/home.svg'
import InputAccessDefault from '../../../components/global/inputAccessDefault'
import { FaEnvelope, FaUser } from 'react-icons/fa';

const SignInPage = () => {
  return (
    <>
      <Container>
        <ContainerLeft>
          <ContainerContentLeft>
              <img src={logo} alt="Imagem" />
              <h1 className='titulo'>Acesse sua conta</h1>

              <form>
              <label>Email</label>
              <input 
                type="text" 
                placeholder='Informe seu email'
                required
              />

              <label>Senha</label>
              <input 
                type="password" 
                placeholder='Informe sua senha'
                required
              />
            </form>

            <NavLink to="/forgetpass">Esqueceu sua senha?</NavLink>

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
