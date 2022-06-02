// libraries
import React, { useEffect } from 'react';

// js
import {
    Container,
    Text,
    Texting,
    Button,
    ContainerCube,
    IconG,
    IconM,
    IconW,
    IconF,
    ContainerInner,
} from './homeStyles';
import {
    escritorio,
    LogoG,
    LogoM,
    LogoW,
    LogoF,
} from '../../assets/index';

// renders
const HomePage: React.FC = () => {
    // navigation
    const NavigationGoogle = () => window.open('https://www.google.com.br/');
    const NavigationMessenger = () => window.open('https://www.messenger.com/');
    const NavigationWhatsApp = () => window.open('https://web.whatsapp.com/');
    const NavigationFacebook = () => window.open('https://www.facebook.com/');

    // localStorage
    const SetUser = localStorage.getItem('infoUser') || '';
    const GetUser = localStorage.getItem('EmailUser') || '';

    // useEffect
    useEffect(() => {
        if (!GetUser && !SetUser) {
            window.location.replace('/');
        }
    }, []);

    const Signout = () => {
        localStorage.removeItem('EmailUser');
        localStorage.removeItem('infoUser');
        window.location.replace('/');
    };

    return (
        <Container>
            <ContainerInner background={escritorio}>
                <Text>Serviços de Coaching</Text>
                <Texting>
                    Simple Text. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur id suscipit ex.
                    Suspendisse rhoncus laoreet purus quis elementum.
                </Texting>
                <Button onClick={Signout}>VOLTAR</Button>
                <ContainerCube>
                    <IconG src={LogoG} onClick={NavigationGoogle} />
                    <IconM src={LogoM} onClick={NavigationMessenger} />
                    <IconW src={LogoW} onClick={NavigationWhatsApp} />
                    <IconF src={LogoF} onClick={NavigationFacebook} />
                </ContainerCube>
            </ContainerInner>
        </Container>
    );
};

export default HomePage;
