'use client'
import React from 'react';
import { 
    PlayerContainer,
    PlayerTitle,
    CardsSection,
    } from './styled';
import PlayerCard from '../playerCard';


const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <PlayerContainer>{children}</PlayerContainer>;
  };
const SectionName: React.FC<{ name: string }> = ({ name }) => {
    return <PlayerTitle>{name}</PlayerTitle>;
};
const SectionCards: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CardsSection>{children}</CardsSection>;
};

const PlayerSection = () => {
  return (
    <Container>
      <SectionName name={'Jogadores'}></SectionName>
      <SectionCards>
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
      </SectionCards>
    </Container>
  );
};


export default PlayerSection;