import { Container, ContainerLeft, ContainerContentLeft, ContainerRight } from './style';
import { NavLink } from "react-router-dom";
import home from '../../../assets/home.svg';
import logo from '../../../assets/logo.svg'

const SignUpPage = () => {
    return (
        <>
            <Container>
                <ContainerLeft>
                    <ContainerContentLeft>
                        <img src={logo} alt="Imagem" />
                        <h1 className='titulo'>Registre sua conta</h1>

                        <form>
                            <label>Nome</label>
                            <input
                                type="text"
                                placeholder='Informe seu nome'
                                required
                            />

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