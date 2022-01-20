// libraries
import React, { useEffect, useState } from 'react';

// js
import {
    Container,
    Text,
    Input,
    // InputFree,
    Button,
    TextAction,
} from './loginStyles';

// navigation
import functions from '../../utils/functions';

const LoginPage: React.FC = () => {
    // states
    const [idScreen, setIdScreen] = useState('Login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [telephoneRegister, setTelephoneRegister] = useState('');
    const [CPFRegister, setCPFRegister] = useState('');
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

    const ValidationDisabled = (label: string) => {
        if (label === 'Register') {
            if (
                email.length >= 3
                && password.length >= 3
                // && emailRegister.length >= 3
                // && nameRegister.length >= 3
                // && telephoneRegister.length >= 3
                // && CPFRegister.length >= 3
                // && passwordRegister.length >= 3
                // && confirmPasswordRegister.length >= 3
            ) {
                return false;
            }
            return true;
        }

        return true;
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

    const onChangeTelephoneRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const Format = functions.MaskPhone(txt.target.value);
        setTelephoneRegister(Format);
    };

    const onChangeCPFRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const Format = functions.MaskIdentifier(txt.target.value);
        setCPFRegister(Format);
    };

    const onChangePasswordRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordRegister(txt.target.value);
    };

    const onChangeConfirmPasswordRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPasswordRegister(txt.target.value);
    };

    // renders
    const RenderButtons = (label: string) => (
        <Button
            disabled={ValidationDisabled(label)}
            onClick={Signin}
            activeCursor={ValidationDisabled(label)}
        >
            {label}
        </Button>
    );

    if (idScreen === 'RecoverPassword') {
        return (
            <Container>
                <Text>Esqueci a Senha</Text>
                <Input type="text" placeholder="Email" value={emailRecover} onChange={onChangeEmailRecover} />
                {RenderButtons('ENVIAR')}
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
                <Input type="text" placeholder="Telefone" value={telephoneRegister} onChange={onChangeTelephoneRegister} />
                <Input type="text" placeholder="CPF" value={CPFRegister} onChange={onChangeCPFRegister} />
                <Input type="password" placeholder="Senha" value={passwordRegister} onChange={onChangePasswordRegister} />
                <Input type="password" placeholder="Confirma senha" value={confirmPasswordRegister} onChange={onChangeConfirmPasswordRegister} />
                {RenderButtons('CADASTRE-SE')}
                <TextAction onClick={GoToLogin}>Já tem uma conta? Acesse</TextAction>
            </Container>
        );
    }

    // main
    return (
        <Container>
            <Text>Login</Text>
            {/* <InputFree type="checkbox" name="scales" /> */}
            <Input type="text" placeholder="E-mail" value={email} onChange={onChangeEmail} />
            <Input type="password" placeholder="Senha" value={password} onChange={onChangePassword} />
            <TextAction onClick={GoToRecoverPassword}>Esqueci senha</TextAction>
            {RenderButtons('ENVIAR')}
            <TextAction onClick={GoToRegister}>Não tem uma conta? Clique aqui</TextAction>
        </Container>
    );
};
export default LoginPage;
