/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
// libraries
import React from 'react';

// JS
import {
    Container,
    Icon,
} from './gridItemStyles';
import {
    b7,
} from '../../svgs/svgsIndex';

// imports
import { GridItemType } from '../../pages/types/GridItemType';
import { items } from '../../data/items';

type Props = {
    item: GridItemType,
    onClick: () => void
}

const GridItem: React.FC <Props> = ({ item, onClick }: Props) => (
    <Container
        showBackground={item.permanentShown || item.shown}
        onClick={onClick}
    >
        {item.permanentShown === false && item.shown === false
            && <Icon src={b7} opacity={0.1} />}
        {(item.permanentShown || item.shown) && item.item !== null
            && <Icon src={items[item.item].icon} />}
    </Container>
);

export default GridItem;
