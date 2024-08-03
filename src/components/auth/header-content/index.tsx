// ContentHeader.js
import React, { useState } from 'react';
import { ContentHeaderContainer, NavigationLinks, StyledNavLink } from './style';
import { NavLink } from 'react-router-dom';

const ContentHeader = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: "Dashboard", to: "#" },
        { name: "Movimentações", to: "#" },
        { name: "Planejamentos", to: "#" },
        { name: "Metas", to: "#"},
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
                    >
                        {tab.name}
                    </StyledNavLink>
                ))}
            </NavigationLinks>
        </ContentHeaderContainer>
    );
}

export default ContentHeader;
