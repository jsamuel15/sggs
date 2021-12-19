// libraries
import React, { useState } from 'react';

// JS
import {
    Container,
    ContainerOver,
    Containerfirst,
    ContainerSecond,
    TextHard,
    Button,
    TextIzi,
    InputIzi,
    InputHard,
    ButtonIzi,
} from './loginStyles';

const LoginPage: React.FC = () => {
    function funcAumentar() {
        alert('está funcionando');
    }

    return (
        <Container>
            <ContainerOver>
                <Containerfirst>
                    <TextHard>Welcome Back!</TextHard>
                    <Button>Acesse sua conta</Button>
                </Containerfirst>
                <ContainerSecond>
                    <TextIzi>Entrar</TextIzi>
                    <InputIzi type="text" placeholder="Email" />
                    <InputHard type="password" placeholder="Senha" />
                    <ButtonIzi onClick={funcAumentar}>Entrar</ButtonIzi>
                </ContainerSecond>
            </ContainerOver>
        </Container>
    );
};

export default LoginPage;
