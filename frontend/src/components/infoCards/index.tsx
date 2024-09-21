'use client'
import React from 'react';
import BasicCards from '../card/index';
import { Container } from './styled';

const BaseInfo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Container>{children}</Container>;
  };

const SectionCards = () => {
  return (
        <BaseInfo>
            <BasicCards/>
            <BasicCards/>
            <BasicCards/>
        </BaseInfo>
  );
};

export default SectionCards;
