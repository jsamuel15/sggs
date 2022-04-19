/* eslint-disable default-case */
// libraries
import React from 'react';

// JS
import {
    Container,
    Info,
    LogoLink,
    Img,
    InfoArea,
    Button,
    GridArea,
} from './homeStyles';

import {
    MemoryLogo,
} from '../../assets/index';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';
// import BotaoComponents from '../../components/Botao/BotaoComponents';
// import PessoaComponents from '../../components/Pessoa/PessoaComponents';
// import { levels, calculateImc, Level } from '../../helpers/imc';
// import GridItem from '../../components/GridItem/GridItem';
import InfoItem from '../../components/InfoItem/InfoItem';

// Types
// import { Movie } from '../types/Movie';
// import { Posts } from '../types/Posts';

// Reducers
// import { useContagem } from '../Hooks/Contagem';

const HomePage: React.FC = () => (
    <Container>
        <Info>
            <LogoLink>
                <Img src={MemoryLogo} />
            </LogoLink>

            <InfoArea>
                <InfoItem label="Tempo" value="00:00" />
                <InfoItem label="Movimentos" value="0" />
            </InfoArea>

            <Button>Reiniciar</Button>
        </Info>
        <GridArea>
            ...
        </GridArea>
    </Container>
);

export default HomePage;
