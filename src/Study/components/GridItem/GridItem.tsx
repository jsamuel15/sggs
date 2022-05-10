/* eslint-disable @typescript-eslint/no-unused-vars */
// libraries
import React from 'react';
import { Level } from '../../helpers/imc';

// JS
import {
    Inside,
    Img,
    DivIcon,
    YourImc,
    DivTitle,
    DivInfo,
} from './gridItemStyles';
import {
    upImage,
    downImage,
} from '../../assets/index';

type Props = {
    item: Level
};

const GridItem: React.FC <Props> = ({ item }: Props) => (
    <Inside>
        <DivIcon>
            <Img src={item.icon === 'up' ? upImage : downImage} alt="" />
        </DivIcon>
        <DivTitle>{item.title}</DivTitle>
        {item.yourImc
            && (
                <YourImc>
                    Seu IMC é de
                    {' '}
                    {item.yourImc}
                    {' '}
                    kg/m
                </YourImc>
            )}
        <DivInfo>
            <>
                IMC está entre
                {' '}
                <strong>{item.imc[0]}</strong>
                {' '}
                e
                {' '}
                <strong>{item.imc[1]}</strong>
            </>

        </DivInfo>
    </Inside>
);

export default GridItem;
