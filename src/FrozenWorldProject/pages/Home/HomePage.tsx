// libraries
import React from 'react';
import img from '../../assets/images/paisagem.jpg';

// js
import {
    Container,
    H1,
    Button,
    Header,
} from './homeStyles';

const HomePage: React.FC = () => (
    <Container background={img}>
        <Header> texto de tester do Header</Header>
        <H1> Feel the Fresh, Business Perspectivel </H1>
        <Button>DETAILS</Button>
    </Container>
);

export default HomePage;
