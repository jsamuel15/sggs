/* eslint-disable default-case */
// libraries
import React, { useEffect, useState } from 'react';

// JS
import {
    Container,
    Info,
    LogoLink,
    Img,
    InfoArea,
    GridArea,
    Grid,
} from './homeStyles';

import {
    MemoryLogo,
} from '../../assets/index';
import {
    restart,
} from '../../svgs/svgsIndex';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';
// import BotaoComponents from '../../components/Botao/BotaoComponents';
// import PessoaComponents from '../../components/Pessoa/PessoaComponents';
// import { levels, calculateImc, Level } from '../../helpers/imc';
// import GridItem from '../../components/GridItem/GridItem';
import InfoItem from '../../components/InfoItem/InfoItem';
import Button from '../../components/Button/Button';

// Types
// import { Movie } from '../types/Movie';
// import { Posts } from '../types/Posts';
import { GridItemType } from '../types/GridItemType';

// Datas
import { items } from '../data/items';

// Reducers
// import { useContagem } from '../Hooks/Contagem';

const HomePage: React.FC = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [showCount, setShowCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType>([]);

    useEffect(() => resetAndCreateGrid(), []);

    const resetAndCreateGrid = () => {
        // passo 1 - resetar o jogo
        setTimeElapsed(0);
        setMoveCount(0);
        setShowCount(0);

        // passo 2 - criar o grid
        // passo 2.1 - criar um grid vazio
        const tmGrid: GridItemType[] = [];
        for (let i = 0; i < (items.length * 2); i++) {
            tmGrid.push({
                item: null,
                shwon: false,
                permanentShown: false,
            });
        }
        // 2.2 - preencher o grid
        for (let w = 0; w < 2; w++) {
            for (let i =0; i < items.length; i++) {
                let pos = -1;
                while(pos < 0 || tmGrid[pos].item !== null) {
                    pos = Math.flor(Math.random() * (items.length * 2));
                }
                tmGrid[pos].pitem = i;
            }
        }
        // 2.3 - jogar no state
        setGridItems(tmGrid);

        // passo 3 - começar o jogo
        setPlaying(true);
    };
    return (
        <Container>
            <Info>
                <LogoLink>
                    <Img src={MemoryLogo} />
                </LogoLink>

                <InfoArea>
                    <InfoItem label="Tempo" value="00:00" />
                    <InfoItem label="Movimentos" value="0" />
                </InfoArea>

                <Button label="Reiniciar" icon={restart} onClick={resetAndCreateGrid} />
            </Info>
            <GridArea>
                <Grid>
                    ...
                </Grid>
            </GridArea>
        </Container>
    );
};

export default HomePage;
