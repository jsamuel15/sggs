/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// libraries
import React from 'react';

// JS
import {
    Header,
    H1,
} from './headerStyles';

type Props = {
    // eslint-disable-next-line react/require-default-props
    title?: string;
}

const HeaderComponents = ({ title }: Props) => (
    <Header>
        <H1>{title}</H1>
    </Header>
);

export default HeaderComponents;
