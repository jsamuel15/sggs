// libraries
import React, { ChangeEvent, useEffect, useState } from 'react';

// JS
import {
    ContainerMain,
    Button,
    Container,
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
import Types from '../../pages/types/Movie';

const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const loadMovies = () => {
        fetch('https://api.b7web.com.br/cinema/')
            .then((response)=>{
                return response.json();
            });
            .then((json)=>{
                setMovies(json);
            });
        }

    return (
        <ContainerMain>
            <Button onClick={loadMovies}>Carregar Filmes</Button>

            Total de filmes:
            {' '}
            {movies.length}
            <Container>
                {Movies.map((item, index) => (

                ))}
            </Container>
        </ContainerMain>
    );

function then(arg0: (json: any) => void) {
    throw new Error('Function not implemented.');
}

function setMovies(json: any) {
    throw new Error('Function not implemented.');
}

};

export default HomePage;
