import Header from "../../../../components/auth/header";
import { Container, ContainerContent } from "./style";
import ContentHeader from "../../../../components/auth/header-content";
import { settingsTabs } from "../../../../components/config/tabs";

const CategoriesPage = () => {
    return (
        <>
            <Header title="Meu Perfil"/>

            <Container>
                <ContentHeader tabs={settingsTabs}/>
                <ContainerContent>
                    
                </ContainerContent>
            </Container>
        </>
    )
}

export default CategoriesPage