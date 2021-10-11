/* eslint-disable consistent-return */
// libraries
import React from 'react';

// icons
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import {
    Home,
    Header,
    Body,
    ContainerCard,
    DivInfoArea,
    DivArea,
    TextAreaName,
    TextPriceArea,
    ContainerDivArea,
    TextValorize,
    DivItemPorcent,
} from './homeStyles';
import allListJson from '../../utils/AllListJson';

const HomePage: React.FC = () => {
    const RenderItens = (type: number) => {
        const allItemValorized = allListJson.allCards.filter((item) => item.valorize === true);
        const allItemNotValorized = allListJson.allCards.filter((item) => item.valorize === false);

        const itemNumberRender = () => {
            if (type === 1) {
                return allListJson.allCards;
            }
            if (type === 2) {
                return allItemValorized;
            }
            if (type === 3) {
                return allItemNotValorized;
            }
        };
        return itemNumberRender()?.map((item) => (
            <ContainerCard>
                <DivInfoArea>
                    <DivArea>
                        <TextAreaName>{item.title}</TextAreaName>
                    </DivArea>
                    <ContainerDivArea>
                        <TextPriceArea>{`$${item.price.toLocaleString('USD', { minimumFractionDigits: 2 })}`}</TextPriceArea>
                        {
                            item.valorize === true
                                ? (
                                    <TextValorize color>
                                        <DivItemPorcent backGrounColor>
                                            {`+${item.percentage.toFixed(2)}%`}
                                        </DivItemPorcent>
                                        <AiOutlineArrowUp />
                                    </TextValorize>
                                )
                                : (
                                    <TextValorize color={false}>
                                        <DivItemPorcent backGrounColor={false}>
                                            {`-${item.percentage.toFixed(2)}%`}
                                        </DivItemPorcent>
                                        <AiOutlineArrowDown />
                                    </TextValorize>
                                )
                        }
                    </ContainerDivArea>
                </DivInfoArea>
            </ContainerCard>
        ));
    };
    // main
    return (
        <Home>
            <Header />
            <Body>
                {RenderItens(1)}
            </Body>
            <Body>
                {RenderItens(2)}
            </Body>
            <Body>
                {RenderItens(3)}
            </Body>
        </Home>
    );
};

export default HomePage;
