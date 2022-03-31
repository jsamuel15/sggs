/* eslint-disable react/no-array-index-key */
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
    RigthBig,
    RigthArrow,
    ImgTwo,
    RigthSide,
    RigthInner,
} from './homeStyles';
import {
    poweredImage,
    leftarrowImage,
} from '../../assets/index';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';
// import BotaoComponents from '../../components/Botao/BotaoComponents';
// import PessoaComponents from '../../components/Pessoa/PessoaComponents';
import { levels, calculateImc, Level } from '../../helpers/imc';
import GridItem from '../../components/GridItem/GridItem';

const HomePage: React.FC = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null);

    const handleCalculateButton = () => {
        if (heightField && weightField) {
            setToShow(calculateImc(heightField, weightField));
        } else {
            alert('Digite todos os Campos');
        }
    };

    const handleBackButton = () => {
        setToShow(null);
        setHeightField(0);
        setWeightField(0);
    };

    return (
        <ContainerMain>
            <Header>
                <Box>
                    <Img src={poweredImage} />
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
                        disabled={!!toShow}
                    />
                    <InputLeft
                        type="number"
                        placeholder="Digite o seu peso. EX: 60.6"
                        value={weightField > 0 ? weightField : ''}
                        onChange={(e) => setWeightField(parseFloat(e.target.value))}
                        disabled={!!toShow}
                    />
                    <Button onClick={handleCalculateButton} disabled={!!toShow}>Calcular</Button>
                </LeftSide>
                <RigthSide>
                    {!toShow
                    && (
                        <RigthInner>
                            {levels.map((item, key) => (
                                <GridItem key={key} item={item} />
                            ))}
                        </RigthInner>
                    )}
                    {toShow
                    && (
                        <RigthBig>
                            <RigthArrow onClick={handleBackButton}>
                                <ImgTwo src={leftarrowImage} />
                            </RigthArrow>
                            <GridItem item={toShow} />
                        </RigthBig>
                    )}
                </RigthSide>
            </Container>
        </ContainerMain>
    );
};

export default HomePage;
