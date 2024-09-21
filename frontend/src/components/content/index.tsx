'use client'
import React from 'react';
import { MainContent } from './styled';
import SectionCards from '../infoCards';
import PlayerSection from '../player';
import DashBoard from '../dashboard';


const ContentInfo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainContent>{children}</MainContent>;
};


const Content = () => {
  return (
    <ContentInfo>
      <SectionCards />
      <PlayerSection />
      <DashBoard />
    </ContentInfo>
  );
};

export default Content;
