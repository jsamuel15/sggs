// libraries
import React from 'react';

// js
import {
    Container,
    Text,
    Texting,
    Button,
    // ButtonTwo,
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
        <Container background={escritorio}>
            {/* <ContainerInner> */}
            <Text>Serviços de Coaching</Text>
            <Texting>
                Simple Text. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Curabitur id suscipit ex.
                Suspendisse rhoncus laoreet purus quis elementum.
            </Texting>
            <Button onClick={Signout}>VOLTAR</Button>
            {/* </ContainerInner> */}
        </Container>
    );
};

export default HomePage;
