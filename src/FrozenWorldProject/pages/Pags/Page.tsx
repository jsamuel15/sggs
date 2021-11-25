import React from 'react';

// js
import {
    Container,
    Header,
    Text,
    Button,
} from './pageStyles';

// renders
const Page: React.FC = () => (
    <Container>
        <Header>
            <Text> Página de Pages </Text>
            <Button onClick={() => window.location.replace('/home')}>Voltar para Home</Button>
        </Header>
    </Container>
);

export default Page;
