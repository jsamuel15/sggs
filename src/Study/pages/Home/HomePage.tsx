/* eslint-disable @typescript-eslint/no-use-before-define */
// libraries
import React, { useState, useEffect } from 'react';

// JS
import {
    ContainerMain,
    Container,
    ContainerAce,
    ContainerInner,
    ContainerSelect,
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = () => {
        fetch('https://api.b7web.com.br/cinema/')
            .then((response) => response.json())
            .then((json) => {
                setMovies(json);
            })
            .catch((e) => {
                setLoading(false);
                setMovies([]);
                console.error(e);
            });
    };

    // const loadMovies = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await fetch('https://api.b7web.com.br/cinema/');
    //         const json = await response.json();
    //         setLoading(false);
    //         setMovies(json);
    //     } catch (e) {
    //         setLoading(false);
    //         setMovies([]);
    //         console.error(e);
    //     }
    // };

    return (
        <ContainerMain>
            {loading
            && <ContainerAce>Carregando...</ContainerAce>}
            {!loading
                    && (
                        <>

                            <ContainerSelect>
                                Total de filmes:
                                {' '}
                                {movies.length}
                            </ContainerSelect>
                            <Container className="grid grid-colus-6">
                                {movies.map((item, index) => (
                                    <ContainerInner>
                                        <Img className="cw-32 block" src={item.avatar} />
                                        {item.titulo}
                                    </ContainerInner>
                                ))}
                            </Container>
                        </>
                    )}
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
