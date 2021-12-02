import React from 'react';

// js
import {
    Container,
    Header,
    Text,
    Button,
    ButtonTwo,
    ButtonTree,
    ButtonFour,
    ButtonFive,
    ButtonSix,
} from './ourTeamStyles';

// renders
const Equipe: React.FC = () => (
    <Container>
        <Header>
            <Button onClick={() => window.location.replace('/home')}>HOME</Button>
            <ButtonTwo onClick={() => window.location.replace('/page')}>PAGES</ButtonTwo>
            <ButtonTree onClick={() => window.location.replace('/about')}>ABOUT</ButtonTree>
            <ButtonFour onClick={() => window.location.replace('/galeria')}>GALERY</ButtonFour>
            <ButtonFive onClick={() => window.location.replace('/nossaEquipe')}>OUR TEAM</ButtonFive>
            <ButtonSix onClick={() => window.location.replace('/contato')}>CONTACT</ButtonSix>
        </Header>
        <Text>Página our team</Text>
    </Container>
);

export default Equipe;
