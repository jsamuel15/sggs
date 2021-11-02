// libraries
import React from 'react';
import img from '../../assets/images/paisagem.jpg';

// js
import {
    Container, H1,
} from './homeStyles';

const HomePage: React.FC = () => (
    <Container background={img}>
        <H1> Feel the Fresh, Business Perspectivel </H1>
    </Container>
);

export default HomePage;
