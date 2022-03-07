// libraries
import React from 'react';

// JS
import {
    Container,
    Test,
} from './homeStyles';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';
import PhotoComponents from '../../components/Photo/PhotoComponents';

const HomePage: React.FC = () => (
    <Container>
        <HeaderComponent title="Qual quer nome" />
        <Test>
            Olá pessoal.
        </Test>
        <PhotoComponents url="http://www.google.com.br/google.jpg" legend="Google" />
    </Container>
);

export default HomePage;
