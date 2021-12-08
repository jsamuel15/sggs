// libraries
import React from 'react';
import img from '../../assets/images/paisagem.jpg';

// js
import {
    Container,
    ContainerInner,
    Hr,
    H1,
    H3,
    H6,
    Button,
    ButtonTwo,
    Icon,
    IconTwo,
} from './homeStyles';
import {
    imgIcon,
    imgIconTwo,
} from '../../assets/index';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';

// renders
const HomePage: React.FC = () => {
    // const GoToNavigationGoogle = () => window.open('https://www.google.com.br/');
    // const GoToNavigationMessenger = () => window.open('https://www.messenger.com/');
    // const GoToNavigationWhatsApp = () => window.open('https://web.whatsapp.com/');
    const GoToNavigationFacebook = () => window.open('https://www.facebook.com/');

    return (
        <Container background={img}>
            <HeaderComponent />
            <ContainerInner>
                <H1> Feel the Fresh Business Perspectivel </H1>
                <H3> INNOVATIVE SOLUTIONS AND GLOBAL CONSULTING </H3>
                <Hr />
                <H6>
                    We elp global leaders with their organiation most
                    critical issues and opportunities,
                    Together, we create enduring charge and results.
                </H6>
                <IconTwo src={imgIconTwo} />
                <Button>CONTACT US</Button>
                <ButtonTwo>DETAILS</ButtonTwo>
                <Icon src={imgIcon} onClick={GoToNavigationFacebook} />
            </ContainerInner>
        </Container>
    );
};

export default HomePage;
