import { useState } from 'react'
import { Container, ContainerLeft, ContainerContentLeft, ContainerRight } from './style';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import home from '../../../assets/home.svg';
import logo from '../../../assets/logo.svg'
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
                        <h1 className='titulo'>Registre sua conta</h1>

                        <form>
                            <InputAccess
                                label="Nome"
                                icon={FaUser}
                                placeholder="Informe seu nome"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />

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

                        <button className='btnEntrar'>Cadastrar</button>

                        <h2 className='divider'>OU</h2>

                        <NavLink to="/" className="btnCadastrar">Acessar sua conta</NavLink>

                    </ContainerContentLeft>
                </ContainerLeft>
                <ContainerRight>
                    <img src={home} alt="Imagem" />
                </ContainerRight>
            </Container>
        </>
    )
}

export default SignUpPage