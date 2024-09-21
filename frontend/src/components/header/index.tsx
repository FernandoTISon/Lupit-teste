'use client'
import React from 'react';
import { HeaderTittle, HeaderContainer } from './styled';

const StyledHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <HeaderContainer>{children}</HeaderContainer>;
  };
  
  const HeaderName: React.FC<{ name: string }> = ({ name }) => {
    return <HeaderTittle>{name}</HeaderTittle>;
  };

const Header = () => {
    return (
        <StyledHeader>
            <HeaderName name="FutLovers"/>
        </StyledHeader>
    );
};

export default Header;
