import React from 'react';
import { useSelector } from 'react-redux';
import { StyledNavLink, StyledNav } from './Navigation.styled.jsx';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors.js';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    return(
    <StyledNav>
        <StyledNavLink
            exact
            to="/"
            activeClassName="activeLink">
            Home
        </StyledNavLink>
            
        {isLoggedIn && (
            <StyledNavLink
                to="/contacts"
                activeClassName="activeLink">
                Contacts
            </StyledNavLink>
        )}    
    </StyledNav>
    )
}

export default Navigation;