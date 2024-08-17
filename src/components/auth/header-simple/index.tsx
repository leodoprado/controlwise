import React from 'react';
import { ContentHeaderContainer, NavigationLinks, StyledNavLink } from './style';
import { useLocation } from 'react-router-dom';

interface Tab {
    name: string;
    to: string;
}

const HeaderSimple: React.FC = () => {

    return (
        <ContentHeaderContainer>
            <NavigationLinks>
                <h1>Configurações</h1>
            </NavigationLinks>
        </ContentHeaderContainer>
    );
}

export default HeaderSimple;
