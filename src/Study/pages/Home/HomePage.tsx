/* eslint-disable no-alert */
/* eslint-disable no-empty */
/* eslint-disable react/react-in-jsx-scope */
// libraries
import React, { useState } from 'react';

// JS
import {
    ContainerMain,
    Header,
    Box,
    Img,
    Container,
    LeftSide,
    H1,
    InputLeft,
    PhraseOne,
    Button,
    RigthSide,
} from './homeStyles';
import {
    powered,
} from '../../assets/index';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';
// import BotaoComponents from '../../components/Botao/BotaoComponents';
// import PessoaComponents from '../../components/Pessoa/PessoaComponents';

const HomePage: React.FC = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    const handleCalculateButton = () => {
        if (heightField && weightField) {
        } else {
            alert('Digite todos os Campos');
        }
    };

    return (
        <ContainerMain>
            <Header>
                <Box>
                    <Img src={powered} />
                </Box>
            </Header>
            <Container>
                <LeftSide>
                    <H1>Calcule seu IMC.</H1>
                    <PhraseOne>
                        IMC é a cigla para Índice de Massa Corpórea. parâmetro adotado pela
                        Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.
                    </PhraseOne>
                    <InputLeft
                        type="number"
                        placeholder="Digite a sua Altura em metros. EX: 1.6"
                        value={heightField > 0 ? heightField : ''}
                        onChange={(e) => setHeightField(parseFloat(e.target.value))}
                    />
                    <InputLeft
                        type="number"
                        placeholder="Digite o seu peso. EX: 60.6"
                        value={weightField > 0 ? weightField : ''}
                        onChange={(e) => setWeightField(parseFloat(e.target.value))}
                    />
                    <Button onClick={handleCalculateButton}>Calcular</Button>
                </LeftSide>
                <RigthSide>Lado direito</RigthSide>
            </Container>
        </ContainerMain>
    );
};

export default HomePage;
