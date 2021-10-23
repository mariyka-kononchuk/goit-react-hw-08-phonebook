import React from 'react';
import { StyledNavLink, StyledNav } from './AuthNav.styled.jsx'

const AuthNav = () => (
    <StyledNav>
        <StyledNavLink
            exact
            to="/register"
            
            activeClassName="activeLink">Register</StyledNavLink>
        <StyledNavLink
            to="/login"
           
            activeClassName="activeLink">Login</StyledNavLink>
    </StyledNav>
)

export default AuthNav;