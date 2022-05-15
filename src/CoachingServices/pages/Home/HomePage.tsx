/* eslint-disable consistent-return */
// libraries
import React, { useState } from 'react';

// js
import {
    Container,
    // ContainerInner,
    Text,
    Input,
    TextAction,
    Texting,
    Button,
    ButtonTwo,
} from './homeStyles';
import {
    escritorio2,
} from '../../assets/index';

// renders
const HomePage: React.FC = () => {
// useState
    const [idScreen, setIdScreen] = useState('Login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [emailRecover, setEmailRecover] = useState('');

    const Bringin = () => {
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

    if (idScreen === 'RecoverPassword') {
        return (
            <Container>
                <Text>Esqueci a Senha</Text>
                <Input type="text" placeholder="Email" onChange={onChangeEmailRecover} />
                <TextAction>Já tem uma conta? Acesse</TextAction>
            </Container>
        );
    }

    if (idScreen === 'Register') {
        return (
            <Container>
                <Text>Cadastro</Text>
                <Input type="text" placeholder="Nome" onChange={onChangeNameRegister} />
                <Input type="text" placeholder="Email" onChange={onChangeEmailRegister} />
                <Input type="password" placeholder="Senha" onChange={onChangePasswordRegister} />
                <Input type="password" placeholder="Confirma senha" onChange={onChangeConfirmPasswordRegister} />
                <TextAction>Já tem uma conta? Acesse</TextAction>
            </Container>
        );
    }

    // main
    return (
        <Container background={escritorio2}>
            {/* <ContainerInner> */}
            <Text>Serviços de Coaching</Text>
            <Texting>
                Simple Text. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Curabitur id suscipit ex.
                Suspendisse rhoncus laoreet purus quis elementum.
            </Texting>
            <Button>SABER MAIS</Button>
            <ButtonTwo>DEMONTAÇÃO AO VIVO</ButtonTwo>
            {/* </ContainerInner> */}
        </Container>
    );
};

export default HomePage;
