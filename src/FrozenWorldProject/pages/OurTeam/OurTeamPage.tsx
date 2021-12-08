import React from 'react';

// js
import {
    Container,
    Text,
} from './ourTeamStyles';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';

// renders
const Equipe: React.FC = () => (
    <Container>
        <HeaderComponent />
        <Text>Página our team</Text>
    </Container>
);

export default Equipe;
