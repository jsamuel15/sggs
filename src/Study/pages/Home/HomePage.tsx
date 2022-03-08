// libraries
import React from 'react';

// JS
import {
    Container,
    Test,
    Img,
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
        <PhotoComponents legend="Google">
            <Img src="http://www.google.com.br/google.jpg" alt="" />
        </PhotoComponents>
    </Container>
);

export default HomePage;
