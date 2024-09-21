'use client'
import React from 'react';
import { CardContainer, Number, Name } from './styled';


const BaseCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardNum: React.FC<{ number: number }> = ({ number }) => {
  return <Number>{number}</Number>;
};

const CardName: React.FC<{ name: string }> = ({ name }) => {
  return <Name>{name}</Name>;
};

const BasicCards = () => {
  return (
      <BaseCard>
        <CardNum number={10} />
        <CardName name="Times" />
      </BaseCard>
  );
};

export default BasicCards;
