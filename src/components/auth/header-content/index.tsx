import React from 'react';
import { ContentHeaderContainer, NavigationLinks, StyledNavLink } from './style';

interface Tab {
    name: string;
    to: string;
}

interface ContentHeaderProps {
    tabs: Tab[];
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ tabs }) => {
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
