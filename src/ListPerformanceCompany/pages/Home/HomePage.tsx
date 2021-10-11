/* eslint-disable consistent-return */
// libraries
import React, { useEffect, useState } from 'react';

// js
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import {
    Home,
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
import { itemCardInterfaces } from '../../interfaces';

// components
import HeaderComponent from '../../components/HeaderComponent';

const HomePage: React.FC = () => {
    // states
    const [openScrollBar, setOpenScrollBar] = useState(false);
    const [allList, setAllList] = useState(allListJson.allCards);
    const [search, setSearch] = useState('');

    // useEffect
    useEffect(() => {
        if (search.length) {
            setOpenScrollBar(true);
        } else {
            setTimeout(() => {
                setOpenScrollBar(true);
            }, 2200);
        }
    }, [search]);

    // renders
    const RenderValorizeCard = (item: itemCardInterfaces) => {
        if (item.valorize) {
            return (
                <TextValorize color>
                    <DivItemPorcent backGrounColor>
                        {`+${item.percentage.toFixed(2)}%`}
                    </DivItemPorcent>
                    <AiOutlineArrowUp />
                </TextValorize>
            );
        }

        return (
            <TextValorize color={false}>
                <DivItemPorcent backGrounColor={false}>
                    {`-${item.percentage.toFixed(2)}%`}
                </DivItemPorcent>
                <AiOutlineArrowDown />
            </TextValorize>
        );
    };

    const RenderItens = (type: number) => {
        const allItemValorized = allList.filter((item) => item.valorize === true);
        const allItemNotValorized = allList.filter((item) => item.valorize === false);

        const itemNumberRender = () => {
            if (type === 1) {
                return allList;
            }
            if (type === 2) {
                return allItemValorized;
            }
            if (type === 3) {
                return allItemNotValorized;
            }
        };

        return itemNumberRender()?.map((item) => (
            <ContainerCard qtdSearch={search.length > 0}>
                <DivInfoArea>
                    <DivArea>
                        <TextAreaName>{item.title}</TextAreaName>
                    </DivArea>
                    <ContainerDivArea>
                        <TextPriceArea>{`$${item.price.toLocaleString('USD', { minimumFractionDigits: 2 })}`}</TextPriceArea>
                        {RenderValorizeCard(item)}
                    </ContainerDivArea>
                </DivInfoArea>
            </ContainerCard>
        ));
    };

    // main
    return (
        <Home>
            <HeaderComponent
                search={search}
                setSearch={setSearch}
                setAllList={setAllList}
                setOpenScrollBar={setOpenScrollBar}
            />
            <Body openScrollBar={openScrollBar}>
                {RenderItens(1)}
            </Body>
            <Body openScrollBar={openScrollBar}>
                {RenderItens(2)}
            </Body>
            <Body openScrollBar={openScrollBar}>
                {RenderItens(3)}
            </Body>
        </Home>
    );
};

export default HomePage;
