// libraries
import React from 'react';
import img from '../../assets/images/paisagem.jpg';

// js
import {
    Container,
    ContainerInner,
    Header,
    Text,
    Soon,
    SoonTwo,
    SoonTree,
    H1,
    H3,
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
    IconTwo,
} from './homeStyles';
import {
    imgIcon,
    imgIconTwo,
    logoG,
    logoM,
    logoW,
} from '../../assets/index';

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
            <Soon src={logoG} />
            <SoonTwo src={logoM} />
            <SoonTree src={logoW} />
        </Header>
        <ContainerInner>
            <H1> Feel the Fresh Business Perspectivel </H1>
            <H3> INNOVATIVE SOLUTIONS AND GLOBAL CONSULTING </H3>
            <H6>
                We elp global leaders with their organiation most critical issues and opportunities,
                Together, we create enduring charge and results.
            </H6>
            <Button>CONTACT US</Button>
            <ButtonTwo>DETAILS</ButtonTwo>
            <IconTwo src={imgIconTwo} />
            <Icon src={imgIcon} />
        </ContainerInner>
    </Container>
);

export default HomePage;
