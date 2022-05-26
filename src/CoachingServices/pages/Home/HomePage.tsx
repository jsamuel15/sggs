// libraries
import React from 'react';

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
