// libraries
import React from 'react';

// JS
import {
    Container,
    Test,
} from './homeStyles';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';

const HomePage: React.FC = () => (
    <Container>
        <HeaderComponent />
        <Test>
            Olá pessoal.
        </Test>
    </Container>
);

export default HomePage;
