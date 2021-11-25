import React from 'react';

// js
import {
    Container,
    Header,
    Text,
    Button,
} from './galeriaStyles';

// renders
const Galeria: React.FC = () => (
    <Container>
        <Header>
            <Text>Página Galeria</Text>
        </Header>
        <Button onClick={() => window.location.replace('/home')}>Voltar para Home</Button>
    </Container>
);

export default Galeria;
