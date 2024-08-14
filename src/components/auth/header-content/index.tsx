import React from 'react';
import { ContentHeaderContainer, NavigationLinks, StyledNavLink } from './style';
import { useLocation } from 'react-router-dom';

interface Tab {
    name: string;
    to: string;
}

const ContentHeader: React.FC = () => {
    const location = useLocation();

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
