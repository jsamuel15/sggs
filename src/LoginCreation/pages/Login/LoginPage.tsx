// libraries
import React, { useEffect, useState } from 'react';

// js
import {
    Container,
    ContainerOver,
    ContainerFirst,
    ContainerSecond,
    TextHard,
    Button,
    TextIzi,
    TextClone,
    InputIzi,
    ButtonIzi,
} from './loginStyles';

const LoginPage: React.FC = () => {
    // useState
    const [idScreen, setIdScreen] = useState('Login');
    const [widthActual, setWidthActual] = useState(window.innerWidth);
    // states Login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // states Register
    const [emailRegister, setEmailRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    // states Recover
    const [emailRecover, setEmailRecover] = useState('');

    // useEffect
    useEffect(() => {
        const AdjustSize = window.addEventListener('resize', () => {
            setWidthActual(window.innerWidth);
        });

        return AdjustSize;
    }, []);

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

    const ValidationDisabled = (label: string) => {
        if (label === 'Entrar') {
            if (email.length >= 1 && password.length >= 1) {
                return false;
            }
            return true;
        }
        if (label === 'Cadastra-se') {
            if (
                emailRegister.length >= 1
                && passwordRegister.length >= 1
                && confirmPasswordRegister.length >= 1
                && nameRegister.length >= 1
            ) {
                return false;
            }
            return true;
        }
        if (label === 'Recuperar senha') {
            if (emailRecover.length >= 1) {
                return false;
            }
            return true;
        }

        return true;
    };

    const Signin = () => {
        // eslint-disable-next-line no-alert
        alert('Logou!');
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
    const RenderButtons = (label: string) => (
        <ButtonIzi
            disabled={ValidationDisabled(label)}
            onClick={Signin}
            activeCursor={ValidationDisabled(label)}
        >
            {label}
        </ButtonIzi>
    );

    const RenderComponentsAuth = () => {
        if (idScreen === 'Login') {
            return (
                <>
                    <ContainerFirst>
                        <TextHard>Welcome Back!</TextHard>
                        <Button onClick={GoToRegister}>Crie sua conta</Button>
                    </ContainerFirst>
                    <ContainerSecond>
                        <TextIzi>Entrar</TextIzi>
                        <InputIzi type="text" placeholder="Email" value={email} onChange={onChangeEmail} />
                        <InputIzi type="password" placeholder="Senha" value={password} onChange={onChangePassword} />
                        <TextClone onClick={GoToRecoverPassword}>Esqueci senha</TextClone>
                        {RenderButtons('Entrar')}
                        {widthActual <= 600 ? (
                            <Button onClick={GoToRegister}>Crie sua conta</Button>
                        ) : null}
                    </ContainerSecond>
                </>
            );
        }

        if (idScreen === 'Register') {
            return (
                <>
                    <ContainerFirst>
                        <TextHard>Welcome Back!</TextHard>
                        <Button onClick={GoToLogin}>Acesse sua conta</Button>
                    </ContainerFirst>
                    <ContainerSecond>
                        <TextIzi>Crie sua conta</TextIzi>
                        <InputIzi type="text" placeholder="Nome" value={nameRegister} onChange={onChangeNameRegister} />
                        <InputIzi type="text" placeholder="Email" value={emailRegister} onChange={onChangeEmailRegister} />
                        <InputIzi type="password" placeholder="Senha" value={passwordRegister} onChange={onChangePasswordRegister} />
                        <InputIzi type="password" placeholder="Confirma senha" value={confirmPasswordRegister} onChange={onChangeConfirmPasswordRegister} />
                        {RenderButtons('Cadastra-se')}
                        {widthActual <= 600 ? (
                            <Button onClick={GoToLogin}>Acesse sua conta</Button>
                        ) : null}
                    </ContainerSecond>
                </>
            );
        }

        if (idScreen === 'RecoverPassword') {
            return (
                <>
                    <ContainerFirst>
                        <TextHard>Welcome Back!</TextHard>
                        <Button onClick={GoToLogin}>Acesse sua conta</Button>
                    </ContainerFirst>
                    <ContainerSecond>
                        <TextIzi>Esqueci a senha</TextIzi>
                        <InputIzi type="text" placeholder="Email" value={emailRecover} onChange={onChangeEmailRecover} />
                        {RenderButtons('Recuperar senha')}
                        {widthActual <= 600 ? (
                            <Button onClick={GoToLogin}>Acesse sua conta</Button>
                        ) : null}
                    </ContainerSecond>
                </>
            );
        }

        return null;
    };

    return (
        <Container>
            <ContainerOver>
                {RenderComponentsAuth()}
            </ContainerOver>
        </Container>
    );
};

export default LoginPage;
