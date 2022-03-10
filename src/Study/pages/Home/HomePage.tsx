/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
// libraries
import { useState } from 'react';

// JS
import {
    Container,
    Button,
} from './homeStyles';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';

const HomePage: React.FC = () => {
    const [n, setN] = useState(0);

    const DecreaseValue = () => {
        setN(n - 1);
    };

    const IncreaseValue = () => {
        setN(n + 1);
    };

    return (
        <Container>
            <Button onClick={DecreaseValue}>-</Button>
            O valor é
            {' '}
            {n}
            ;
            <Button onClick={IncreaseValue}>+</Button>
        </Container>
    );
};

export default HomePage;
