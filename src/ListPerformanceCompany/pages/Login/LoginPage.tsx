/* eslint-disable max-len */
// libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// js
import {
    Header,
    Container,
    H1,
    Input,
    Button,
    Home,
    ContainerInner,
    TextAction,
} from './loginStyles';

import { updateUser } from '../../store/modules/user/actions';

// navigation
import Navigation from '../../routes/navigation';
// import functions from '../../utils/functions';

const LoginPage: React.FC = () => {
    // useDispatch
    const dispatch = useDispatch();

    // states
    // const [hora, setHora] = useState('');
    // const [data, setData] = useState('');
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    // const [telefone, setTelefone] = useState('');
    // const [cpf, setCPF] = useState('');
    const [password, setPassword] = useState('');
    const [pathRoute, setPathRoute] = useState('');
    const [redirect, setRedirect] = useState(false);

    // methods
    // const onChangeHora = (txt: React.ChangeEvent<HTMLInputElement>) => {
    //     const Format = functions.hoursMask(hora, txt.target.value);
    //     setHora(Format);
    // };

    // const onChangeData = (txt: React.ChangeEvent<HTMLInputElement>) => {
    //     const Format = functions.dateMask(data, txt.target.value);
    //     setData(Format);
    // };

    const onChangeNome = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setName(txt.target.value);
    };

    const onChangeProfissão = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setProfession(txt.target.value);
    };

    const onChangeEmail = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(txt.target.value);
    };

    // const onChangeTelefone = (txt: React.ChangeEvent<HTMLInputElement>) => {
    //     const Format = functions.MaskPhone(txt.target.value);
    //     setTelefone(Format);
    // };

    // const onChangeCPF = (txt: React.ChangeEvent<HTMLInputElement>) => {
    //     const Format = functions.MaskIdentifier(txt.target.value);
    //     setCPF(Format);
    // };

    const onChangeSenha = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(txt.target.value);
    };

    const ValidationDisabled = () => {
        if (name.length >= 2 && profession.length >= 5 && email.length >= 5 && email.includes('@') && password.length >= 6) {
            return false;
        }
        return true;
    };

    const Signin = () => {
        const newUser = {
            name,
            email,
            profession,
            password,
        };
        dispatch(updateUser(newUser));
        setRedirect(true);
        setPathRoute('/home');
    };

    return (
        <Container>
            <Home>
                <Navigation pathRoute={pathRoute} redirect={redirect} />
                <ContainerInner>
                    <Header>
                        <H1>Login</H1>
                    </Header>
                    {/* <Input placeholder="Hora" value={hora} onChange={onChangeHora} /> */}
                    {/* <Input placeholder="Data" value={data} onChange={onChangeData} /> */}
                    <Input placeholder="Nome" value={name} onChange={onChangeNome} />
                    <Input placeholder="Profissão" value={profession} onChange={onChangeProfissão} />
                    <Input type="email" placeholder="E-mail" value={email} onChange={onChangeEmail} />
                    {/* <Input placeholder="Telefone" value={telefone} onChange={onChangeTelefone} />
                    <Input placeholder="CPF" value={cpf} onChange={onChangeCPF} /> */}
                    <Input type="password" placeholder="Senha" value={password} onChange={onChangeSenha} />
                    <Button
                        disabled={ValidationDisabled()}
                        activeCursor={ValidationDisabled()}
                        onClick={Signin}
                    >
                        Entrar
                    </Button>
                    <TextAction onClick={() => window.location.replace('/RecoverPassword')}>Lembrar senha</TextAction>
                </ContainerInner>
            </Home>
        </Container>
    );
};

export default LoginPage;
