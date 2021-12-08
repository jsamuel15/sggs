import React from 'react';

// js
import {
    Container,
    Text,
} from './WebScreenStyles';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';

// renders
const Page: React.FC = () => (
    <Container>
        <HeaderComponent />
        <Text> Página de Pages </Text>
    </Container>
);

export default Page;
