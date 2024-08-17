import Header from "../../../../components/auth/header";

import { Container, ContainerContent } from "./style";
import ContentHeader from "../../../../components/auth/header-content";

const TransactionsPage = () => {
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

export default TransactionsPage;