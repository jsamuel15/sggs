import React from 'react';

// js
import {
    Container,
    Header,
    Text,
    Button,
} from './equipeStyles';

// renders
const Equipe: React.FC = () => (
    <Container>
        <Header>
            <Text>Página our team</Text>
        </Header>
        <Button onClick={() => window.location.replace('/home')}>Voltar para Home</Button>
    </Container>
);

export default Equipe;
