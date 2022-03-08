/* eslint-disable react/react-in-jsx-scope */
// libraries
import { ReactNode } from 'react';

// JS
import {
    // Img,
    P,
    // Container,
} from './photoStyles';

type Props = {
    legend: string;
    children: ReactNode;
}

export const PhotoComponents = ({ legend, children }: Props) => (
    <>
        {children}
        <P>{legend}</P>
    </>
);

export default PhotoComponents;
