// libraries
import React, { useEffect } from 'react';

// js
import {
    Container,
    Text,
    Texting,
    Button,
    ContainerInner,
} from './homeStyles';
import {
    escritorio,
} from '../../assets/index';

// renders
const HomePage: React.FC = () => {
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
        <ContainerInner>
            <Container background={escritorio}>
                <Text>Serviços de Coaching</Text>
                <Texting>
                    Simple Text. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur id suscipit ex.
                    Suspendisse rhoncus laoreet purus quis elementum.
                </Texting>
                <Button onClick={Signout}>VOLTAR</Button>
            </Container>
        </ContainerInner>
    );
};

export default HomePage;
