/* eslint-disable consistent-return */
// libraries
import React, { useState } from 'react';

// js
import {
    Container,
    Text,
    Texting,
    Button,
    ButtonTwo,
} from './homeStyles';
import {
    escritorio,
} from '../../assets/index';

// renders
const HomePage: React.FC = () => {
// useState
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // methods
    // const GoToLogin = () => {
    //     setIdScreen('Login');
    // }

    // Validation
    const ValidationDisable = (label: string) => {
        if (label === 'Login') {
            if (email.length >= 5 && password.length >= 4) {
                return false;
            }
            return true;
        }
    };

    const Bringin = () => {
        alert('Entrou!');
    };

    const onChangeEmail = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(txt.target.value);
    };

    const onChangePassword = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(txt.target.value);
    };

    return (
        <Container background={escritorio}>
            <Text>Serviços de Coaching</Text>
            <Texting>
                Simple Text. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Curabitur id suscipit ex.
                Suspendisse rhoncus laoreet purus quis elementum.
            </Texting>
            <Button>SABER MAIS</Button>
            <ButtonTwo>DEMONTAÇÃO AO VIVO</ButtonTwo>
        </Container>
    );
};

export default HomePage;
