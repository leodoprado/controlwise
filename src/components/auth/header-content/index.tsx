import React from 'react';
import { ContentHeaderContainer, NavigationLinks } from './style';
import { NavLink } from 'react-router-dom';

const ContentHeader = () => {
    return (
        <ContentHeaderContainer>
            <NavigationLinks>
                <NavLink to="#">Dashboard</NavLink>
                <NavLink to="#">Movimentações</NavLink>
                <NavLink to ="#">Planejamento</NavLink>
                <NavLink to="#">Relatórios</NavLink>
            </NavigationLinks>
        </ContentHeaderContainer>
    );
}

export default ContentHeader;
