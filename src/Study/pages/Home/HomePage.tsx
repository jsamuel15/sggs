/* eslint-disable react/react-in-jsx-scope */
// libraries
import { useState } from 'react';

// JS
import {
    Container,
    Compat,
    Button,
} from './homeStyles';

// components
// import HeaderComponent from '../../components/Header/HeaderComponent';
// import PhotoComponents from '../../components/Photo/PhotoComponents';
// import BotaoComponents from '../../components/Botao/BotaoComponents';
// import PessoaComponents from '../../components/Pessoa/PessoaComponents';

const HomePage: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    };

    return (
        <Container>
            <Button onClick={handleClick}>{show ? 'Ocultar' : 'Mostar' }</Button>
            { show === true
            && (
                <Compat>
                    qual quer coisa
                </Compat>
            )}
        </Container>
    );
};

export default HomePage;
