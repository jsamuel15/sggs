/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
// libraries
import { useState } from 'react';

// JS
import {
    Container,
    Input,
} from './homeStyles';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';

const HomePage: React.FC = () => {
    const [name, setName] = useState('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    return (
        <Container>
            Nome:
            <Input type="text" value={name} onChange={handleInput} />
            <hr />
            Seu nome é:
            {' '}
            {name}
        </Container>
    );
};

export default HomePage;
