// libraries
import React, { useState } from 'react';
// import { Route } from 'react-router-dom';

// JS
import {
    Container,
    // Header,
    // Text,
    // ContainerInner,
} from './homeStyles';

import {
} from '../../assets/index';

import {
} from '../../svgs/svgsIndex';
import authAPI from '../../services/auth';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';
// import BotaoComponents from '../../components/Botao/BotaoComponents';
// import PessoaComponents from '../../components/Pessoa/PessoaComponents';
// import { levels, calculateImc, Level } from '../../helpers/imc';
// import GridItem from '../../components/GridItem/GridItem';
// import InfoItem from '../../components/InfoItem/InfoItem';
// import Button from '../../components/Button/Button';
// import GridItem from '../../components/GridItemTwo/GridItem';

// Types
// import { Movie } from '../types/Movie';
// import { Posts } from '../types/Posts';
// import { GridItemType } from '../types/GridItemType';

// Datas
// import { items } from '../../data/items';

// Helpers
// import { formatTimeElapsed } from '../../helpers/formatTimeElapsed';

// Reducers
// import { useContagem } from '../Hooks/Contagem';

// imports
// import { Home } from './Home';
// import { AboutItem } from './AboutItem';

const HomePage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const ActionLogin = async () => {
        // Iniciar um loading
        const test = await authAPI.Login(email, password);
        if (test.status === 200) {
            // alert9'login
        } else {
            // alert falha ao logar
        }
        // Fechar o loading
    };

    return (
        <Container>
            ...
        </Container>
    );
};

export default HomePage;
