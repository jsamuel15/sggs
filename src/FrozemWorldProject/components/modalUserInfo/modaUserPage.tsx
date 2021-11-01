/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { Modal } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

// js
import {
    Home,
    ItemName,
    ContainerItens,
    ContainerItemName,
    InputEditUser,
    ButtonChange,
} from './modalUserStyle';
import { RootState } from '../../store';
import { updateUser } from '../../store/modules/user/actions';

const ModalUserPage: React.FC = (
    open: any,
    handleClose: any,
) => {
    // useSelector
    const user = useSelector((state: RootState) => state.user.user);

    // dispatch
    const dispatch = useDispatch();

    // states
    const [name, setName] = useState(user?.name);
    const [profession, setProfession] = useState(user?.profession);
    const [email, setEmail] = useState(user?.email);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    // methods
    const onChangeName = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = txt.target.value;
        setName(valueInput);
    };

    const onChangeProfession = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = txt.target.value;
        setProfession(valueInput);
    };

    const onChangeEmail = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = txt.target.value;
        setEmail(valueInput);
    };

    const onChangePassword = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = txt.target.value;
        setPassword(valueInput);
    };

    const onChangeNewPasswordPassword = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = txt.target.value;
        setNewPassword(valueInput);
    };

    // renderizar novo user
    function renderNewValue() {
        if (password === user.newPassword) {
            alert('Você já usou essa senha.');
        } const newUser = {
            ...user,
            name,
            profession,
            password: newPassword,
            email,
        };
        alert('Senha Alterada com Sucesso!');
        dispatch(updateUser(newUser));
    }

    // useEffect
    useEffect(() => {
        setName(user?.name);
        setProfession(user?.profession);
        setEmail(user?.email);
        setPassword('');
        setNewPassword('');
    }, [user]);

    // main
    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
        >
            <Home>
                <ContainerItens>
                    <ContainerItemName>
                        <ItemName>Nome</ItemName>
                        <InputEditUser
                            value={name}
                            type="text"
                            onChange={onChangeName}
                        />
                    </ContainerItemName>
                    <ContainerItemName>
                        <ItemName>Profissão</ItemName>
                        <InputEditUser
                            value={profession}
                            type="text"
                            onChange={onChangeProfession}
                        />
                    </ContainerItemName>
                    <ContainerItemName>
                        <ItemName>E-mail</ItemName>
                        <InputEditUser
                            value={email}
                            type="email"
                            onChange={onChangeEmail}
                        />
                    </ContainerItemName>
                    <ContainerItemName>
                        <ItemName>Senha Atual</ItemName>
                        <InputEditUser
                            value={password}
                            type="password"
                            onChange={onChangePassword}
                        />
                    </ContainerItemName>
                    <ContainerItemName>
                        <ItemName>Nova Senha</ItemName>
                        <InputEditUser
                            value={newPassword}
                            type="password"
                            onChange={onChangeNewPasswordPassword}
                        />
                    </ContainerItemName>
                    <ButtonChange onClick={renderNewValue}>Alterar Informações</ButtonChange>
                </ContainerItens>
            </Home>
        </Modal>
    );
};

export default ModalUserPage;
