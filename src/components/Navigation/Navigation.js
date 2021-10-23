import React from 'react';
import { StyledNavLink, StyledNav } from './Navigation.styled.jsx'

const Navigation = () => (
    <StyledNav>
        <StyledNavLink
            exact
            to="/"
            
            activeClassName="activeLink">Home</StyledNavLink>
        <StyledNavLink
            to="/contacts"
           
            activeClassName="activeLink">Contacts</StyledNavLink>
    </StyledNav>
)

export default Navigation;