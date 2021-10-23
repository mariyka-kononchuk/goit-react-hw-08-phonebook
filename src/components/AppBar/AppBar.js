import React from 'react';
import { Navigation } from '../Navigation';
import { AuthNav } from '../AuthNav';
import { UserMenu } from '../UserMenu';


const AppBar = () => (
    <div>
        <Navigation />
        <AuthNav />
        <UserMenu />
    </div>    
)

export default AppBar;