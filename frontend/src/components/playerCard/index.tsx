'use client'
import React from 'react';
import { 
  CardContainer,
  CardNum, CardName,
  PhotoContainer,
  InfoContainer
     } from './styled';
import PlayerPhoto from '../playerPhoto';

const Player: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const PlayerNum: React.FC<{ number: number }> = ({ number }) => {
  return <CardNum>{number}</CardNum>;
};

const PlayerName: React.FC<{ name: string }> = ({ name }) => {
  return <CardName>{name}</CardName>;
};
const PhotoSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PhotoContainer>{children}</PhotoContainer>;
};
const InfoSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <InfoContainer>{children}</InfoContainer>;
};




const PlayerCard = () => {

    return (
      <Player>
        <PhotoSection>
          <PlayerPhoto />
        </PhotoSection>
        <InfoSection>
          <PlayerName  name="nome" />
          <PlayerNum number={10}/>
        </InfoSection>
      </Player>
    );
};

export default PlayerCard;
