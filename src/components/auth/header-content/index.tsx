import React from 'react';
import { ContentHeaderContainer, NavigationLinks, StyledNavLink } from './style';

interface Tab {
    name: string;
    to: string;
}

const ContentHeader: React.FC = () => {

    const tabs: Tab[] = [
        { name: "Dashboard", to: "/myexpenses/dashboard" },
        { name: "Movimentações", to: "/myexpenses/transactions" },
        { name: "Planejamentos", to: "/myexpenses/planning" },
        { name: "Metas", to: "/myexpenses/goals" },
        { name: "Análises", to: "/myexpenses/analysis" },
        { name: "Relatórios", to: "/myexpenses/reports" }
    ];

    return (
        <ContentHeaderContainer>
            <NavigationLinks>
                {tabs.map((tab, index) => (
                    <StyledNavLink
                        key={index}
                        to={tab.to}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        {tab.name}
                    </StyledNavLink>
                ))}
            </NavigationLinks>
        </ContentHeaderContainer>
    );
}

export default ContentHeader;
