import Header from "../../../components/auth/header";
import { Container, ContainerContent } from "./style";
import SimpleHeader from "../../../components/auth/header-simple";

const ProfilePage = () => {
    return (
        <>
            <Header title="Meu Perfil"/>

            <Container>
                <SimpleHeader title="Configurações"/>
                <ContainerContent>
                    
                </ContainerContent>
            </Container>
        </>
    )
}

export default ProfilePage