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
    Hr,
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
const HomePage: React.FC = () => {
    const GoToNavigationGoogle = () => { window.open('https://www.google.com.br/'); };
    const GoToNavigationMessenger = () => { window.open('https://www.messenger.com/'); };
    const GoToNavigationWhatsApp = () => { window.open('https://web.whatsapp.com/'); };
    const GoToNavigationFacebook = () => { window.open('https://www.facebook.com/'); };

    return (
        <Container background={img}>
            <Header>
                <Text>ARCTIC AIR</Text>
                <ButtonTree>HOME</ButtonTree>
                <ButtonFour onClick={() => window.location.replace('/page')}>PAGES</ButtonFour>
                <ButtonFive onClick={() => window.location.replace('/about')}>ABOUT</ButtonFive>
                <ButtonSix onClick={() => window.location.replace('/galeria')}>GALERY</ButtonSix>
                <ButtonSeven onClick={() => window.location.replace('/nossaEquipe')}>OUR TEAM</ButtonSeven>
                <ButtonEigth onClick={() => window.location.replace('/contato')}>CONTACTS</ButtonEigth>
                <Soon src={logoG} onClick={GoToNavigationGoogle} />
                <SoonTwo src={logoM} onClick={GoToNavigationMessenger} />
                <SoonTree src={logoW} onClick={GoToNavigationWhatsApp} />
            </Header>
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
