/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
// libraries
import React from 'react';

// JS
import {
    Container,
    H2,
} from './homeStyles';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';
// import BotaoComponents from '../../components/Botao/BotaoComponents';
import PessoaComponents from '../../components/Pessoa/PessoaComponents';

const HomePage: React.FC = () => {
    const list = [
        { name: 'Pedro', age: 21 },
        { name: 'Samara', age: 25 },
        { name: 'João', age: 47 },
        { name: 'Maria', age: 40 },
        { name: 'Bonieky', age: 30 },
    ];

    return (
        <Container>
            <H2>Lista de Presença</H2>
            <ul>
                {list.map((item) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <PessoaComponents data={item} />
                ))}
            </ul>
        </Container>
    );
};

export default HomePage;
