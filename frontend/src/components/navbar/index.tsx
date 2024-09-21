'use client'
import React from 'react';
import { StyledNavbar } from './styled';
import NavList from '../navList';


const NavBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledNavbar>{children}</StyledNavbar>;
  };




const Nav = () => {
    return (
        <NavBar>
            <NavList />
        </NavBar>
    );
};

export default Nav;
