import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { StyledHeader } from './AppBar.styled.jsx';

export default function AppBar() {
    const isLoggedIn = useSelector(getIsLoggedIn)

    return (
        <StyledHeader>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </StyledHeader>
    );
}      


