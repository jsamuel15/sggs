/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

type Props = {
    data: {
        name: string;
        age: number;
    }
}

export const PessoaComponents = ({ data }: Props) => (
    <li>
        {data.name}
        {' '}
        -
        {data.age}
        {' '}
        anos.
    </li>
);

export default PessoaComponents;
