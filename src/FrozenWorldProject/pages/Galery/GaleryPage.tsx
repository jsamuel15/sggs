import React from 'react';

// js
import {
    Container,
    Text,
} from './galeryStyles';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';

// renders
const Galeria: React.FC = () => (
    <Container>
        <HeaderComponent />
        <Text>Página Galeria</Text>
    </Container>
);

export default Galeria;
