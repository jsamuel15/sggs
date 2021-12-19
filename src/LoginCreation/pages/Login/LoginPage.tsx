// libraries
import React, { useState } from 'react';

// js
import {
    Container,
    ContainerOver,
    Containerfirst,
    ContainerSecond,
    TextHard,
    Button,
    TextIzi,
    TextClone,
    InputIzi,
    InputHard,
    ButtonIzi,
} from './loginStyles';

const LoginPage: React.FC = () => {
    // useState
    const [idScreen, setIdScreen] = useState('Login');

    // methods
    const GoToRegister = () => {
        setIdScreen('Register');
    };

    const GoToRecoverPassword = () => {
        setIdScreen('RecoverPassword');
    };

    const GoToLogin = () => {
        setIdScreen('Login');
    };

    // renders
    const RenderComponents = () => {
        if (idScreen === 'Login') {
            return (
                <>
                    <Containerfirst>
                        <TextHard>Welcome Back!</TextHard>
                        <Button onClick={GoToRegister}>Crie sua conta</Button>
                    </Containerfirst>
                    <ContainerSecond>
                        <TextIzi>Entrar</TextIzi>
                        <InputIzi type="text" placeholder="Email" />
                        <InputHard type="password" placeholder="Senha" />
                        <TextClone onClick={GoToRecoverPassword}> Esqueci senha </TextClone>
                        <ButtonIzi>Entrar</ButtonIzi>
                    </ContainerSecond>
                </>
            );
        }

        if (idScreen === 'Register') {
            return (
                <>
                    <Containerfirst>
                        <TextHard>Welcome Back!</TextHard>
                        <Button onClick={GoToLogin}>Acesse sua conta</Button>
                    </Containerfirst>
                    <ContainerSecond>
                        <TextIzi>Crie sua conta</TextIzi>
                        <InputIzi type="text" placeholder="Nome" />
                        <InputIzi type="text" placeholder="Email" />
                        <InputHard type="password" placeholder="Senha" />
                        <InputHard type="password" placeholder="Confirma senha" />
                        <ButtonIzi>Cadastra-se</ButtonIzi>
                    </ContainerSecond>
                </>
            );
        }

        if (idScreen === 'RecoverPassword') {
            return (
                <>
                    <Containerfirst>
                        <TextHard>Welcome Back!</TextHard>
                        <Button onClick={GoToLogin}>Acesse sua conta</Button>
                    </Containerfirst>
                    <ContainerSecond>
                        <TextIzi>Esqueci a senha</TextIzi>
                        <InputIzi type="text" placeholder="Email" />
                        <ButtonIzi>Recuperar senha</ButtonIzi>
                    </ContainerSecond>
                </>
            );
        }

        return null;
    };

    return (
        <Container>
            <ContainerOver>
                {RenderComponents()}
            </ContainerOver>
        </Container>
    );
};

export default LoginPage;
