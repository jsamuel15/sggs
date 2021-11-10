// libraries
import React from 'react';
import img from '../../assets/images/paisagem.jpg';

// js
import {
    Container,
    ContainerInner,
    Header,
    Text,
    H1,
    H4,
    H6,
    Button,
    ButtonTwo,
    ButtonTree,
    ButtonFour,
    ButtonFive,
    ButtonSix,
    ButtonSeven,
    ButtonEigth,
    Icon,
} from './homeStyles';
import { imgIcon } from '../../assets/index';

// renders
const HomePage: React.FC = () => (
    <Container background={img}>
        <Header>
            <Text>ARCTIC AIR</Text>
            <ButtonTree>HOME</ButtonTree>
            <ButtonFour>PAGES</ButtonFour>
            <ButtonFive>ABOUT</ButtonFive>
            <ButtonSix>GALERY</ButtonSix>
            <ButtonSeven>CONTACTS</ButtonSeven>
            <ButtonEigth>OUR TEAM</ButtonEigth>
            <Icon src={imgIcon} />
        </Header>
        <ContainerInner>
            <H1> Feel the Fresh, Business Perspectivel </H1>
            <H4> INNOVATIVE SOLUTIONS AND GLOBAL CONSULTING </H4>
            <H6>
                We elp global leaders with their organiation most critical issues and opportunities,
                Together, we create enduring charge and results.
            </H6>
            <Button>CONTACT US</Button>
            <ButtonTwo>DETAILS</ButtonTwo>
        </ContainerInner>
    </Container>
);

export default HomePage;
