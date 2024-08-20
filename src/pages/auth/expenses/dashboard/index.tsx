import React from "react";
import Header from "../../../../components/auth/header";

import { Container, ContainerContent } from "./style";
import ContentHeader from "../../../../components/auth/header-content";
import { expensesTabs } from "../../../../components/config/tabs";

const DashboardPage = () => {

    return (
        <>
            <Header title="Minhas Despesas" />

            <Container>
                <ContentHeader tabs={expensesTabs}/>
                <ContainerContent>

                </ContainerContent>
            </Container>
        </>
    )
}

export default DashboardPage;