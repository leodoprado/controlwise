import { useState } from 'react';
import { Container, ContainerLeft, ContainerContentLeft, ContainerRight } from './style';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import home from '../../../assets/home.svg';
import logo from '../../../assets/logo.svg';
import InputAccess from '../../../components/global/inputAccess';

const SignUpPage = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    return (
        <>
            <Container>
                <ContainerLeft>
                    <ContainerContentLeft>
                        <img src={logo} alt="Imagem" />
                        
                        <div className="btnLinks">
                            <NavLink 
                                to="/signin" 
                                className={({ isActive }) => isActive ? "btnAcesso active" : "btnAcesso"}
                            >
                                Entrar
                            </NavLink>
                            <NavLink 
                                to="/signup" 
                                className={({ isActive }) => isActive ? "btnAcesso active" : "btnAcesso"}
                            >
                                Cadastrar
                            </NavLink>
                        </div>

                        <form>
                            <InputAccess
                                label="Nome"
                                icon={FaUser}
                                placeholder="Informe seu nome"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                type='text'
                            />

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

                        <button className='btnCadastrar'>Cadastrar</button>
                    </ContainerContentLeft>
                </ContainerLeft>
                <ContainerRight>
                    <img src={home} alt="Imagem" />
                </ContainerRight>
            </Container>
        </>
    );
}

export default SignUpPage;
