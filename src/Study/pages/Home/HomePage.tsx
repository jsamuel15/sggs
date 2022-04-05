// libraries
import React, { ChangeEvent, useEffect, useState } from 'react';

// JS
import {
    ContainerMain,
    Button,
    Input,
    Text,
} from './homeStyles';
import {
} from '../../assets/index';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';
// import BotaoComponents from '../../components/Botao/BotaoComponents';
// import PessoaComponents from '../../components/Pessoa/PessoaComponents';
// import { levels, calculateImc, Level } from '../../helpers/imc';
// import GridItem from '../../components/GridItem/GridItem';

const HomePage: React.FC = () => {
    const [name, setName] = useState('Pedro');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        setFullName(`${name} ${lastName}`);
    }, [name, lastName]);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };
    return (
        <ContainerMain>
            <Input type="text" placeholder="Digite seu nome" value={name} onChange={handleNameChange} />
            <Input type="text" placeholder="Digite seu Sobrenome" value={lastName} onChange={handleLastNameChange} />
            <Text>
                Nome Completo:
                {' '}
                {fullName}
            </Text>
            <Button>Clique aqui</Button>
        </ContainerMain>
    );
};

export default HomePage;
