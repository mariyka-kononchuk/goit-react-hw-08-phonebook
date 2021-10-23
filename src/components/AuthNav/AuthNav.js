import React from 'react';
import { StyledNavLink, StyledNav } from './AuthNav.styled.jsx'

const Navigation = () => (
    <StyledNav>
        <StyledNavLink
            exact
            to="/"
            
            activeClassName="activeLink">Contacts</StyledNavLink>
        <StyledNavLink
            to="/movies"
           
            activeClassName="activeLink">Movies</StyledNavLink>
    </StyledNav>
)

export default Navigation;