'use client'
import React from 'react';
import { MainContainer } from './styled';
import Nav from '../navbar';
import Content from '../content';

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <MainContainer>{children}</MainContainer>;
  };


const Main = () => {
    return (
        <MainContent> 
            <Nav />
            <Content />
        </MainContent>
    );
};

export default Main;