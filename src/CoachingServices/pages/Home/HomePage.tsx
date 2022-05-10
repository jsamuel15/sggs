/* eslint-disable consistent-return */
// libraries
import React, { useState } from 'react';

// js
import {
    Container,
} from './homeStyles';

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
        <Container>
            ...
        </Container>
    );
};

export default HomePage;
