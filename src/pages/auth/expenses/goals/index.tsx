import Header from "../../../../components/auth/header";

import { Container, ContainerContent } from "./style";
import ContentHeader from "../../../../components/auth/header-content";

const GoalsPage = () => {
    return (
        <>
            <Header title="Minhas Despesas"/>
            
            <Container>
                <ContentHeader/>
                <ContainerContent>

                </ContainerContent>
            </Container>
        </>
    )
}

export default GoalsPage;