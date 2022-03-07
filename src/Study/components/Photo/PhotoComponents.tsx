// libraries
import React from 'react';

// JS
import {
    Img,
    P,
    Container,
} from './photoStyles';

type Props = {
    url: string;
    legend: string;
}

export const PhotoComponents = ({ url, legend }: Props) => (
    <Container>
        <Img src={url} />
        <P>{legend}</P>
    </Container>
);

export default PhotoComponents;
