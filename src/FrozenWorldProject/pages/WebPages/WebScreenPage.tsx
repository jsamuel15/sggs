import React from 'react';

// js
import {
    Container,
    Text,
} from './WebScreenStyles';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';

// methods
const About: React.FC = () => {
    const phrase = 'Eu quero ser programador';
    const phraseImportant = 'programador';
    const deltetPhrase = phrase.split(' ');
    const phraseName = deltetPhrase.filter((v) => v === phraseImportant);
    // main
    return (
        <Container>
            <HeaderComponent />
            <Text>{phraseName[0]}</Text>
        </Container>
    );
};

export default About;
