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
    const [idScreen, setIdScreen] = useState('Register');
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
        // const infoUser = {
        //     email: emailRegister,
        //     name: nameRegister,
        //     telephone: telephoneRegister,
        //     CPF: CPFRegister,
        // };
        // localStorage.setItem('infoUser', JSON.stringify(infoUser));
        setPathRoute('/home');
        setRedirect(true);
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
        if (idScreen === 'RecoverPassword') {
            return (
                <Container>
                    <ContainerInner>
                        <Text>Esqueci a Senha</Text>
                        <Input type="text" placeholder="Email" onChange={onChangeEmailRecover} />
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
                        <Input type="text" placeholder="Nome" onChange={onChangeNameRegister} />
                        <Input type="text" placeholder="Email" onChange={onChangeEmailRegister} />
                        <Input type="password" placeholder="Senha" onChange={onChangePasswordRegister} />
                        <Input type="password" placeholder="Confirma senha" onChange={onChangeConfirmPasswordRegister} />
                        <TextAction onClick={GoToHome}>Já tem uma conta? Acesse</TextAction>
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
