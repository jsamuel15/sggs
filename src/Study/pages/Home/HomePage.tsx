/* eslint-disable react/react-in-jsx-scope */
// libraries
import React from 'react';

// JS
import {
    ContainerMain,
    Header,
    Box,
    Img,
    Container,
    LeftSide,
    RigthSide,
    // Button,
} from './homeStyles';
import {
    powered,
} from '../../assets/index';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';
// import BotaoComponents from '../../components/Botao/BotaoComponents';
// import PessoaComponents from '../../components/Pessoa/PessoaComponents';

const HomePage: React.FC = () => (
    <ContainerMain>
        <Header>
            <Box>
                <Img src={powered} />
            </Box>
        </Header>
        <Container>
            <LeftSide>Lado esquerdo</LeftSide>
            <RigthSide>Lado direito</RigthSide>
        </Container>
    </ContainerMain>
);

export default HomePage;
