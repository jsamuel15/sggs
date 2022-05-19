/* eslint-disable @typescript-eslint/no-explicit-any */
// libraries
import React, { useState } from 'react';

// js
import {
    Container,
    Text,
    Input,
    TextAction,
    TextTipe,
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

    const ValidationDisabled = (id: string) => {
        if (id === 'Register') {
            if (
                emailRegister.length >= 5
                && nameRegister.length >= 3
                && passwordRegister.length >= 4
                && confirmPasswordRegister.length >= 4
                && passwordRegister === confirmPasswordRegister
            ) {
                return false;
            }
            return true;
        }
        if (id === 'Login') {
            if (
                email.length >= 5
                && password.length >= 4
            ) {
                return false;
            }
            return true;
        }
        if (id === 'Recover') {
            if (
                emailRecover.length >= 6
            ) {
                return false;
            }
            return true;
        }

        return true;
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
    const RenderButtons = (label: string, id: 'Recover' | 'Register' | 'Login', goToClick?: any) => (
        <Button
            disabled={ValidationDisabled(id)}
            activeCursor={ValidationDisabled(id)}
            onClick={goToClick}
        >
            {label}
        </Button>
    );

    const RenderFrame = () => {
        if (idScreen === 'Login') {
            return (
                <Container>
                    <Text>Login</Text>
                    {/* <InputFree type="checkbox" name="scales" /> */}
                    <Input type="text" placeholder="E-mail" value={email} onChange={onChangeEmail} />
                    <Input type="password" placeholder="Senha" value={password} onChange={onChangePassword} />
                    <TextTipe onClick={GoToRecoverPassword}>Esqueci senha</TextTipe>
                    <Button activeCursor={ValidationDisabled(id)} onClick={GoToHome}>Entrar</Button>
                    <TextAction onClick={GoToRegister}>Não tem uma conta? Clique aqui</TextAction>
                </Container>
            );
        }

        if (idScreen === 'RecoverPassword') {
            return (
                <Container>
                    <ContainerInner>
                        <Text>Esqueci a Senha</Text>
                        <Input type="text" placeholder="Email" value={emailRecover} onChange={onChangeEmailRecover} />
                        {RenderButtons('ENVIAR', 'Recover')}
                        <TextAction onClick={GoToLogin}>Já tem uma conta? Acesse!</TextAction>
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
                        {RenderButtons('CADASTRE-SE', 'Register', GoToHome)}
                        <TextAction onClick={GoToLogin}>Já tem uma conta? Acesse</TextAction>
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
