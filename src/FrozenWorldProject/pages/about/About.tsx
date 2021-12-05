import React from 'react';

// js
import {
    Container,
    Header,
    TextIce,
    ContainerIce,
    ContainerHard,
    ContainerOpen,
    ContainerBox,
    ContainerSize,
    ContainerInner,
    Button,
    ButtonTwo,
    ButtonTree,
    ButtonFour,
    ButtonFive,
    ButtonSix,
} from './aboutStyled';

// renders
const About: React.FC = () => (
    <Container>
        <Header>
            <Button onClick={() => window.location.replace('/home')}>HOME</Button>
            <ButtonTwo onClick={() => window.location.replace('/page')}>PAGES</ButtonTwo>
            <ButtonTree onClick={() => window.location.replace('/about')}>ABOUT</ButtonTree>
            <ButtonFour onClick={() => window.location.replace('/galeria')}>GALERY</ButtonFour>
            <ButtonFive onClick={() => window.location.replace('/nossaEquipe')}>OUR TEAM</ButtonFive>
            <ButtonSix onClick={() => window.location.replace('/contato')}>CONTACT</ButtonSix>
        </Header>
        <ContainerOpen>
            <ContainerIce>
                <TextIce>
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised words which dont look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there isnt anything
                    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                    the Internet tend to repeat predefined chunks as necessary, making this the
                    first true generator on the Internet. It uses a dictionary of over 200 Latin
                    words, combined with a handful of model sentence structures, to generate
                    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                    always free from repetition, injected humour, or non-characteristic words
                    etc.
                </TextIce>
            </ContainerIce>
            <ContainerBox />
        </ContainerOpen>
        <ContainerHard>
            <ContainerSize />
            <ContainerInner />
        </ContainerHard>
    </Container>
);

export default About;
