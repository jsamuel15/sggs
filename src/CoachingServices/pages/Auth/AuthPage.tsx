// libraries
import React, { useState } from 'react';

// js
import {
    Container,
    Text,
    Input,
    TextAction,
    Button,
    ContainerInner,
} from './authStyles';

// components
import ToNavigation from '../../routes/navigation';

const AuthPage: React.FC = () => {
    // useState
    const [idScreen, setIdScreen] = useState('Login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [emailRecover, setEmailRecover] = useState('');
    const [pathRoute, setPathRoute] = useState('');
    const [redirect, setRedirect] = useState(false);

    // methods
    const GoToHome = () => {
        const infoUser = {
            email: emailRegister,
            name: nameRegister,
            confirmarSenha: passwordRegister,
        };
        localStorage.setItem('infoUser', JSON.stringify(infoUser));
        setPathRoute('/home');
        setRedirect(true);
    };

    const GoToLogin = () => {
        setIdScreen('Login');
    };

    const GoToRecoverPassword = () => {
        setIdScreen('RecoverPassword');
    };

    const GoToRegister = () => {
        setIdScreen('Register');
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
    const RenderFrame = () => {
        if (idScreen === 'Login') {
            return (
                <Container>
                    <Text>Login</Text>
                    {/* <InputFree type="checkbox" name="scales" /> */}
                    <Input type="text" placeholder="E-mail" value={email} onChange={onChangeEmail} />
                    <Input type="password" placeholder="Senha" value={password} onChange={onChangePassword} />
                    <TextAction>Esqueci senha</TextAction>
                    <Button onClick={GoToHome}>Entrar</Button>
                    <TextAction>Não tem uma conta? Clique aqui</TextAction>
                </Container>
            );
        }

        if (idScreen === 'RecoverPassword') {
            return (
                <Container>
                    <ContainerInner>
                        <Text>Esqueci a Senha</Text>
                        <Input type="text" placeholder="Email" value={emailRecover} onChange={onChangeEmailRecover} />
                        <TextAction>Já tem uma conta? Acesse!</TextAction>
                    </ContainerInner>
                </Container>
            );
        }

        if (idScreen === 'Register') {
            return (
                <Container>
                    <ContainerInner>
                        <Text>Cadastro</Text>
                        <Input type="text" placeholder="Nome" value={nameRegister} onChange={onChangeNameRegister} />
                        <Input type="text" placeholder="Email" value={emailRegister} onChange={onChangeEmailRegister} />
                        <Input type="password" placeholder="Senha" value={passwordRegister} onChange={onChangePasswordRegister} />
                        <Input type="password" placeholder="Confirma senha" value={confirmPasswordRegister} onChange={onChangeConfirmPasswordRegister} />
                        <TextAction>Já tem uma conta? Acesse</TextAction>
                    </ContainerInner>
                </Container>
            );
        }

        return null;
    };

    // main
    return (
        <Container>
            <ToNavigation pathRoute={pathRoute} redirect={redirect} />
            {RenderFrame()}
        </Container>
    );
};

export default AuthPage;
