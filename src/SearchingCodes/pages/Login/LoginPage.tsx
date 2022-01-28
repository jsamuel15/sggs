// libraries
import React, { useEffect, useState } from 'react';
import { Checkbox } from '@material-ui/core';

// js
import {
    Container,
    Compact,
    Text,
    TexteStart,
    Input,
    // InputFree,
    Button,
    TextAction,
} from './loginStyles';

// navigation
import functions from '../../utils/functions';

const LoginPage: React.FC = () => {
    // constants
    const GetEmail = localStorage.getItem('SaveEmail') || '';

    // states
    const [idScreen, setIdScreen] = useState('Login');
    const [email, setEmail] = useState(GetEmail);
    const [password, setPassword] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [telephoneRegister, setTelephoneRegister] = useState('');
    const [CPFRegister, setCPFRegister] = useState('');
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [emailRecover, setEmailRecover] = useState('');
    const [checked, setChecked] = useState(GetEmail?.length > 0);

    useEffect(() => {
        const SetUser = localStorage.getItem('infoUser') || '';
        const GetUser = localStorage.getItem('EmailUser') || '';
        if (GetUser.length > 0 || SetUser.length > 0) {
            window.location.replace('/home');
        }
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

    const onChangeChecked = () => {
        setChecked(!checked);
    };

    const ValidationDisabled = (id: string) => {
        if (id === 'Register') {
            if (
                emailRegister.length >= 6
                && nameRegister.length >= 6
                && telephoneRegister.length === 15
                && CPFRegister.length >= 14
                && passwordRegister.length >= 6
                && confirmPasswordRegister.length >= 6
                && passwordRegister === confirmPasswordRegister
            ) {
                return false;
            }
            return true;
        }
        if (id === 'Login') {
            if (
                email.length >= 6
                && password.length >= 6
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

    const Signin = () => {
        if (email.length >= 6 && password.length >= 6) {
            if (checked) {
                localStorage.setItem('SaveEmail', email);
            }
            if (!checked && GetEmail?.length > 0) {
                localStorage.removeItem('SaveEmail');
            }
            localStorage.setItem('EmailUser', email);
            window.location.replace('/home');
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const Signup = () => {
        const infoUser = {
            email: emailRegister,
            name: nameRegister,
            telephone: telephoneRegister,
            CPF: CPFRegister,
        };
        localStorage.setItem('infoUser', JSON.stringify(infoUser));
        window.location.replace('/home');
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
        if (Format.length <= 14) {
            setCPFRegister(Format);
        }
    };

    const onChangePasswordRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordRegister(txt.target.value);
    };

    const onChangeConfirmPasswordRegister = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPasswordRegister(txt.target.value);
    };

    // renders
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const RenderButtons = (label: string, id: 'Recover' | 'Register' | 'Login', onClick?: any) => (
        <Button
            disabled={ValidationDisabled(id)}
            onClick={onClick}
            activeCursor={ValidationDisabled(id)}
        >
            {label}
        </Button>
    );

    if (idScreen === 'RecoverPassword') {
        return (
            <Container>
                <Text>Esqueci a Senha</Text>
                <Input type="text" placeholder="Email" value={emailRecover} onChange={onChangeEmailRecover} />
                {RenderButtons('ENVIAR', 'Recover')}
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
                {RenderButtons('CADASTRE-SE', 'Register', Signup)}
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
            <Compact>
                <Checkbox checked={checked} onChange={onChangeChecked} />
                <TexteStart>Lembrar-me</TexteStart>
            </Compact>
            <TextAction onClick={GoToRecoverPassword}>Esqueci senha</TextAction>
            {RenderButtons('ENTRAR', 'Login', Signin)}
            <TextAction onClick={GoToRegister}>Não tem uma conta? Clique aqui</TextAction>
        </Container>
    );
};

export default LoginPage;
