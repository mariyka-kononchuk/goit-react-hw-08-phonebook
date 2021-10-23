import React from 'react';
import { StyledNavLink, StyledNav } from './UserMenu.styled.jsx'

const UserMenu = () => (
    <StyledNav>
        <StyledNavLink
            to="/"
           
            activeClassName="activeLink">Log out</StyledNavLink>
    </StyledNav>
)

export default UserMenu;