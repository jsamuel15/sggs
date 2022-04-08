// libraries
import React, { useState, useEffect } from 'react';

// JS
import {
    ContainerMain,
    Button,
    Container,
    ContainerInner,
    Img,
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
import { Movie } from '../types/Movie';

const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = () => {
        fetch('https://api.b7web.com.br/cinema/')
            .then((response) => response.json())
            .then((json) => {
                setMovies(json);
            });
    };

    return (
        <ContainerMain>
            <Button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}>Carregar Filmes</Button>

            Total de filmes:
            {' '}
            {movies.length}
            <Container className="grid grid-colus-6">
                {Movies.map((item, index) => (
                    <ContainerInner>
                        <Img className="cw-32 block" src={item.avatar} />
                        {item.titulo}
                    </ContainerInner>
                ))}
            </Container>
        </ContainerMain>
    );

    // function then(arg0: (json: any) => void) {
    //     throw new Error('Function not implemented.');
    // }

    // function setMovies(json: any) {
    //     throw new Error('Function not implemented.');
    // }
};

export default HomePage;
