// libraries
import React, { useEffect, useState } from 'react';

// js
import {
    Container,
    Text,
    Input,
    Button,
    TextAction,
} from './loginStyles';

const LoginPage: React.FC = () => {
    // states
    const [idScreen, setIdScreen] = useState('Login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [emailRecover, setEmailRecover] = useState('');

    useEffect(() => {
        // eslint-disable-next-line no-console
        // setTimeout(() => { console.log('Pegou'); }, 5000);
        localStorage.setItem('Email', 'Pedro@viels.com');
        const Email = localStorage.getItem('Email');
        localStorage.removeItem('Email');
        // eslint-disable-next-line no-console
        console.log(Email);
    }, []);

    // methods
    const GoToLogin = () => {
        setIdScreen('Login');
    };

    const GoToRecoverPassword = () => {
        setIdScreen('RecoverPassword');
    };

    const GoToRegister = () => {
        setIdScreen('Register');
    };

    const Signin = () => {
        // eslint-disable-next-line no-alert
        alert('Entrou!');
    };

    const onChangeEmail = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(txt.target.value);
    };

    const onChangePassword = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(txt.target.value);
    };

    const onChangeEmailRecover = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setEmailRecover(txt.target.value);
    };

    const onChangeNameRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setNameRegister(txt.target.value);
    };

    const onChangeEmailRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setEmailRegister(txt.target.value);
    };

    const onChangePasswordRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordRegister(txt.target.value);
    };

    const onChangeConfirmPasswordRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPasswordRegister(txt.target.value);
    };

    // renders
    if (idScreen === 'RecoverPassword') {
        return (
            <Container>
                <Text>Esqueci a Senha</Text>
                <Input type="text" placeholder="Email" value={emailRecover} onChange={onChangeEmailRecover} />
                <Button onClick={Signin}>ENVIAR</Button>
                <TextAction onClick={GoToLogin}>Já tem uma conta? Acesse</TextAction>
            </Container>
        );
    }

    if (idScreen === 'Register') {
        return (
            <Container>
                <Text>Cadastro</Text>
                <Input type="text" placeholder="Nome" value={nameRegister} onChange={onChangeNameRegister} />
                <Input type="text" placeholder="Email" value={emailRegister} onChange={onChangeEmailRegister} />
                <Input type="text" placeholder="Telefone" />
                <Input type="text" placeholder="CPF" />
                <Input type="password" placeholder="Senha" value={passwordRegister} onChange={onChangePasswordRegister} />
                <Input type="password" placeholder="Confirma senha" value={confirmPasswordRegister} onChange={onChangeConfirmPasswordRegister} />
                <Button onClick={Signin}>CADASTRE-SE</Button>
                <TextAction onClick={GoToLogin}>Já tem uma conta? Acesse</TextAction>
            </Container>
        );
    }

    // main
    return (
        <Container>
            <Text>Login</Text>
            <Input type="text" placeholder="E-mail" value={email} onChange={onChangeEmail} />
            <Input type="password" placeholder="Senha" value={password} onChange={onChangePassword} />
            <TextAction onClick={GoToRecoverPassword}>Esqueci senha</TextAction>
            <Button onClick={Signin}>ENTRAR</Button>
            <TextAction onClick={GoToRegister}>Não tem uma conta? Clique aqui</TextAction>
        </Container>
    );
};
export default LoginPage;
