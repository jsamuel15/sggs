/* eslint-disable default-case */
// libraries
import React, { useReducer } from 'react';

// JS
import {
    Container,
    Button,
    // Text,
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

// Types
// import { Movie } from '../types/Movie';
// import { Posts } from '../types/Posts';

// Reducers
import { useContagem } from '../Hooks/Contagem';

const HomePage: React.FC = () => {
    const [state, dispatch] = useContagem();

    return (
        <Container className="p-5">
            Contagem:
            {' '}
            {state.count}
            <hr />
            <Button className="p-3" onClick={() => dispatch({ type: 'ADD' })}>Adicionar</Button>
            <Button className="p-3" onClick={() => dispatch({ type: 'DEL' })}>Remover</Button>
            <Button className="p-3" onClick={() => dispatch({ type: 'RESET' })}>Resetar</Button>
        </Container>
    );
};

export default HomePage;
