// libraries
import React from 'react';

// JS
import {
    Container,
    Label,
    Value,
} from './infoItemStyles';

type Props = {
    label: string;
    value: string;
}

const InfoItem: React.FC <Props> = ({ label, value }: Props) => (
    <Container>
        <Label>{label}</Label>
        <Value>{value}</Value>
    </Container>
);

export default InfoItem;
