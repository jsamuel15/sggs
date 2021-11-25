import React from 'react';

// js
import {
    Container,
    Header,
    Text,
    Button,
} from './aboutStyles';

// renders
const About: React.FC = () => (
    <Container>
        <Header>
            <Text>Página About </Text>
        </Header>
        <Button onClick={() => window.location.replace('/home')}>Voltar para Home</Button>
    </Container>
);

export default About;
