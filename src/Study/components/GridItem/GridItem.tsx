/* eslint-disable @typescript-eslint/no-unused-vars */
// libraries
import React from 'react';
import { Level } from '../../helpers/imc';

// JS
import {
    Inside,
    Img,
    DivIcon,
    DivTitle,
    DivInfo,
} from './gridItemStyles';
import {
    up,
    down,
} from '../../assets/index';

const GridItem: React.FC = () => {
    type Props = {
        item: Level
    };

    return (
        <Inside>
            <DivIcon>
                <Img src={item.icon === 'up' ? up : down} alt="" />
            </DivIcon>
            <DivTitle>{item.title}</DivTitle>
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
};

export default GridItem;
