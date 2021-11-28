import React from 'react';

// js
import {
    Container,
    Header,
    Text,
    Button,
    ButtonTwo,
    ButtonTree,
    ButtonFour,
    ButtonFive,
} from './galeriaStyles';

// renders
const Galeria: React.FC = () => (
    <Container>
        <Header>
            <Button onClick={() => window.location.replace('/home')}>Voltar para Home</Button>
            <ButtonTwo onClick={() => window.location.replace('/page')}>PAGES</ButtonTwo>
            <ButtonTree onClick={() => window.location.replace('/about')}>ABOUT</ButtonTree>
            <ButtonFour onClick={() => window.location.replace('/galeria')}>GALERY</ButtonFour>
            <ButtonFive onClick={() => window.location.replace('/nossaEquipe')}>OUR TEAM</ButtonFive>
        </Header>
        <Text>Página Galeria</Text>
    </Container>
);

export default Galeria;
