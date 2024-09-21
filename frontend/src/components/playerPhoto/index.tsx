'use client';
import React from 'react';
import { Container, StyledImage } from './styled';

const PhotoContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Container>{children}</Container>;
};

const PlayersImage: React.FC<{ src: string }> = ({ src }) => {
    return <StyledImage src={src} alt="Jogador" />;
};

const PlayerPhoto = () => {
    const imageUrl = "https://via.placeholder.com/150";

    return (
        <PhotoContainer>
            <PlayersImage src={imageUrl} />
        </PhotoContainer>
    );
};

export default PlayerPhoto;
