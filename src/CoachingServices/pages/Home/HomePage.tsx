// libraries
import React from 'react';

// js
import {
    Container,
    Text,
    Texting,
    Button,
    ButtonTwo,
} from './homeStyles';
import {
    escritorio2,
} from '../../assets/index';

// renders
const HomePage: React.FC = () => (
    <Container background={escritorio2}>
        {/* <ContainerInner> */}
        <Text>Serviços de Coaching</Text>
        <Texting>
            Simple Text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur id suscipit ex.
            Suspendisse rhoncus laoreet purus quis elementum.
        </Texting>
        <Button>SABER MAIS</Button>
        <ButtonTwo>DEMONTAÇÃO AO VIVO</ButtonTwo>
        {/* </ContainerInner> */}
    </Container>
);

export default HomePage;
