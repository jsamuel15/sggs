// libraries
import React from 'react';

// js
import { ContainerBox, Label } from './boxContactStyles';

// interface
interface Props {
    id: number,
    label: string,
}

const BoxContactComponent: React.FC<Props> = (props: Props) => {
    // constants
    const { label, id } = props;

    return (
        <ContainerBox key={id}>
            <Label>{label}</Label>
        </ContainerBox>
    );
};

export default BoxContactComponent;
