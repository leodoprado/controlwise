import { useState } from 'react';
import { Container, ContainerLeft, ContainerContentLeft, ContainerRight } from './style';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import home from '../../../assets/home.svg';
import InputAccess from '../../../components/global/inputAccess';

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

            {/* Adicionando os botões de Login e Cadastro */}
            <div className="btnLinks">
              <NavLink 
                to="/signin" 
                className={({ isActive }) => isActive ? "btnAcesso active" : "btnAcesso"}
              >
                Login
              </NavLink>
              <NavLink 
                to="/signup" 
                className={({ isActive }) => isActive ? "btnAcesso active" : "btnAcesso"}
              >
                Cadastro
              </NavLink>
            </div>

            <form>
              <InputAccess
                label="Email"
                icon={FaEnvelope}
                placeholder="Informe seu email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type='text'
              />

              <InputAccess
                label="Senha"
                icon={FaLock}
                placeholder="Informe sua senha"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                type='password'
              />
            </form>

            <NavLink className='forgotpass' to="/forgotpass">Esqueceu sua senha?</NavLink>

            <button className='btnEntrar'>Entrar</button>

            <h2 className='divider'>OU</h2>

            <button className='btnEntrar'><FaGoogle/>Entrar com google</button>

          </ContainerContentLeft>
        </ContainerLeft>
        <ContainerRight>
          <img src={home} alt="Imagem" />
        </ContainerRight>
      </Container>
    </>
  );
};

export default SignInPage;
