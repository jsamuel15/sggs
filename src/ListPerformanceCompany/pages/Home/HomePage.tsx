/* eslint-disable max-len */
/* eslint-disable consistent-return */
// libraries
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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
import { RootState } from '../../store';

// components
import HeaderComponent from '../../components/HeaderComponent';
import ModalCard from '../../components/modalCard/modalCard';

const HomePage: React.FC = () => {
    const allCards = useSelector((state: RootState) => state.user.allCards);

    // states
    const [openScrollBar, setOpenScrollBar] = useState(false);
    const [allList, setAllList] = useState(allCards);
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState<any>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // useEffect
    // useEffect(() => {
    //     if (search.length) {
    //         setOpenScrollBar(true);
    //     } else {
    //         setTimeout(() => {
    //             setOpenScrollBar(true);
    //         }, 2200);
    //     }
    // }, [search]);

    // renders
    const RenderValorizeCard = (item: any) => {
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
        const allItemValorized = allList.filter((item: any) => item.valorize === true);
        const allItemNotValorized = allList.filter((item: any) => item.valorize === false);

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

        return itemNumberRender()?.map((item: any) => (
            <ContainerCard qtdSearch={search.length > 0}>
                <DivInfoArea onClick={handleOpen}>
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
            {ModalCard(open, handleClose)}
        </Home>
    );
};

export default HomePage;
