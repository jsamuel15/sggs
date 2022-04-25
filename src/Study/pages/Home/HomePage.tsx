/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
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
import GridItem from '../../components/GridItemTwo/GridItem';

// Types
// import { Movie } from '../types/Movie';
// import { Posts } from '../types/Posts';
import { GridItemType } from '../types/GridItemType';

// Datas
import { items } from '../../data/items';

// Helpers
import { formatTimeElapsed } from '../../helpers/formatTimeElapsed';

// Reducers
// import { useContagem } from '../Hooks/Contagem';

const HomePage: React.FC = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [showCount, setShowCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType>();

    useEffect(() => resetAndCreateGrid(), []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (playing) {
                setTimeElapsed(timeElapsed + 1);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [playing, timeElapsed]);

// verificar se os abertos são iguais
    useEffect(() => {
        if (showCount === 2) {
            let opened = gridItems.filter((item: { shown: boolean; }) => item.shown === true);
            if (opened.length === 2) {

                // v1 - se eles são iguais fazer os que tem "shown" permanente
                if (opened[0].item === opened[1].item) {
                    let tmpGrid = [...tmpGrid]
                    for (let i in tmpGrid) {
                        if (tmpGrid[i].shown) {
                            tmpGrid[i].permanentShown = true;
                            tmpGrid[i].shown = false;
                    }
                    setGridItems(tmpGrid);
                    setShowCount(0);
                    } else {
                        // v2 - se não forem iguais, feche todos os "shown"
                        setTimeout(() => {
                            for(let i in tmpGrid) {
                                tmpGrid[i].shown = false;
                            }
                            setGridItems(tmpGrid);
                            setShowCount(0);
                        };
                        }, 1000);

                    setMovieCount(movieCount => moveCount + 1);
                };
            };
        };
    }, [showCount, gridItems]);

    useEffect(() => {
        if ( moveCount > 0 && gridItems.every((item: { permanentShown: boolean; }) => item.permanentShown === true)) {
            setPlaying(false);
        }
    }, [moveCount, gridItems]);

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
                shown: false,
                permanentShown: false,
            });
        }
        // 2.2 - preencher o grid
        for (let w = 0; w < 2; w++) {
            for (let i = 0; i < items.length; i++) {
                let pos = -1;
                while (pos < 0 || tmGrid[pos].item !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }
                tmGrid[pos].item = i;
            }
        }
        // 2.3 - jogar no state
        setGridItems(tmGrid);

        // passo 3 - começar o jogo
        setPlaying(true);
    };

    const handleItemClick = (index: number) => {
        if (onplaying && index !== null && showCount < 2) {
            const tmpGrid = [...gridItems];

            if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
            tmpGrid[index].show = true;
            setShowCount(showCount + 1);
            setGridItems(tmpGrid);
            }
        }
    };

    return (
        <Container>
            <Info>
                <LogoLink>
                    <Img src={MemoryLogo} />
                </LogoLink>

                <InfoArea>
                    <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
                    <InfoItem label="Movimentos" value={moveCount.toString()} />
                </InfoArea>

                <Button label="Reiniciar" icon={restart} onClick={resetAndCreateGrid} />
            </Info>
            <GridArea>
                <Grid>
                    {gridItem.map((item, index) => (
                        <GridItem
                            key={index}
                            item={item}
                            onClick={() => handleItemClick(item)}
                        />
                    ))}
                </Grid>
            </GridArea>
        </Container>
    );
};

export default HomePage;
function tmpGrid(tmpGrid: any) {
    throw new Error('Function not implemented.');
}

function setGridItems(tmpGrid: any) {
    throw new Error('Function not implemented.');
}

function setShowCount(arg0: number) {
    throw new Error('Function not implemented.');
}

function setMovieCount(arg0: (movieCount: any) => any) {
    throw new Error('Function not implemented.');
}

function setTimeElapsed(arg0: number) {
    throw new Error('Function not implemented.');
}

function setMoveCount(arg0: number) {
    throw new Error('Function not implemented.');
}

function setPlaying(arg0: boolean) {
    throw new Error('Function not implemented.');
}

