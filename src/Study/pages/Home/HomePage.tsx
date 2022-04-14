/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-use-before-define */
// libraries
import React, { useState, useEffect, ChangeEvent } from 'react';

// JS
import {
    ContainerMain,
    Container,
    ContainerAce,
    ContainerInner,
    ContainerSelect,
    Input,
    Button,
    H4,
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

// Types
// import { Movie } from '../types/Movie';
import { Posts } from '../types/Posts';

const HomePage: React.FC = () => {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [loading, setLoading] = useState(false);

    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setLoading(false);
        setPosts(json);
    };

    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value);
    };
    const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value);
    };
    const handleAddClick = () => {
        alert(`${addTitleText} - ${addBodyText}`);
    };

    return (
        <ContainerMain>
            {loading
            && <ContainerAce>Carregando...</ContainerAce>}
            <fieldset className="border-2 mb-3 p-3">
                <legend>Adicionar um novo post</legend>
                <Input
                    value={addTitleText}
                    onChange={handleAddTitleChange}
                    className="block border"
                    type="text"
                    placeholder="digite um titulo"
                />
                <textarea
                    className="block border"
                    value={addBodyText}
                    onChange={handleBodyChange}
                />
                <Button
                    className="block border"
                    onClick={handleAddClick}
                >
                    Adicionar
                </Button>
            </fieldset>
            {!loading && posts.length > 0
                        && (
                            <>
                                <ContainerSelect>
                                    Total de filmes:
                                    {' '}
                                    {posts.length}
                                </ContainerSelect>
                                <Container>
                                    {posts.map((item, index) => (
                                        <ContainerInner key={index} className="my-4">
                                            <H4 className="font-bold">{item.title}</H4>
                                            <small>
                                                #
                                                {item.id}
                                                {' '}
                                                - Usuário:
                                                {' '}
                                                {item.userId}
                                            </small>
                                            <Text>{item.body}</Text>
                                        </ContainerInner>
                                    ))}
                                </Container>
                            </>
                        )}
        </ContainerMain>
    );
};

export default HomePage;
