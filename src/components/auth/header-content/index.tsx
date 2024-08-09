import React, { useState, useEffect } from 'react';
import { ContentHeaderContainer, NavigationLinks, StyledNavLink } from './style';

const ContentHeader = () => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setActiveTab(0); // Primeiro item selecionado por padrão
    }, []);

    const tabs = [
        { name: "Dashboard", to: "/dashboard" },
        { name: "Movimentações", to: "/transactions" },
        { name: "Planejamentos", to: "#" },
        { name: "Metas", to: "#" },
        { name: "Análises", to: "#" },
        { name: "Relatórios", to: "#" }
    ];

    return (
        <ContentHeaderContainer>
            <NavigationLinks>
                {tabs.map((tab, index) => (
                    <StyledNavLink
                        key={index}
                        to={tab.to}
                        className={activeTab === index ? 'active' : ''}
                        onClick={() => setActiveTab(index)}
                        active={activeTab === index} // Passa a prop active para o StyledNavLink
                    >
                        {tab.name}
                    </StyledNavLink>
                ))}
            </NavigationLinks>
        </ContentHeaderContainer>
    );
}

export default ContentHeader;
