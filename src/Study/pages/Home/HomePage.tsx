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

// Types
// import { Movie } from '../types/Movie';
import { Posts } from '../types/Posts';

const HomePage: React.FC = () => {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setPosts(json);
    };

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
};

export default HomePage;
