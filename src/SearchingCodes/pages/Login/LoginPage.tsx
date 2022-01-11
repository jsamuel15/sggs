// libraries
import React from 'react';

// js
import {
    Container,
    Text,
    Input,
    Button,
    TextAction,
} from './loginStyles';

const LoginPage: React.FC = () =>

// renders
    // eslint-disable-next-line implicit-arrow-linebreak
    (
        <Container>
            <Text>Login</Text>
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <TextAction>Esqueci senha</TextAction>
            <Button>Lembrar-me</Button>
            <TextAction>Não tem uma conta? Clique aqui</TextAction>
        </Container>
    );
export default LoginPage;
