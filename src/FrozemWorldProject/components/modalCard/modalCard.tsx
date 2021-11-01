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
    InputEditUserSelect,
} from './modaCardStyles';
import { RootState } from '../../store';
import { updateCard } from '../../store/modules/user/actions';

const ModalCard: React.FC = (
    openModalProfile: any,
    closeModalProfile: any,
) => {
    // useSelector
    const userCard = useSelector((state: RootState) => state.user.allCards);

    // dispatch
    const dispatch = useDispatch();

    // states
    const [cardTitle, setCardTitle] = useState('');
    const [cardPrice, setCardPrice] = useState('');
    const [cardValorize, setCardValorize] = useState('');
    const [cardPercentage, setCardPercentage] = useState('');

    // methods
    const onChangeTitle = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = txt.target.value;
        setCardTitle(valueInput);
    };

    const onChangeValorize = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = txt.target.value;
        setCardValorize(valueInput);
    };

    const onChangePercentage = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = txt.target.value;
        setCardPercentage(valueInput);
    };

    const onChangePrice = (txt: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = txt.target.value;
        setCardPrice(valueInput);
    };

    // renderizar novo user
    function renderNewValue() {
        const newUserCard = {
            ...userCard,
            title: cardTitle,
            price: cardPrice,
            valorize: cardValorize,
            percentage: cardPercentage,
        };
        dispatch(updateCard(newUserCard));
    }

    // // useEffect
    // useEffect(() => {
    //     setTitle('');
    //     setPrice('');
    //     setValorize('');
    //     setPercentage('');
    // }, [userCard]);

    // main
    return (
        <Modal
            open={openModalProfile}
            onClose={closeModalProfile}
            closeAfterTransition
        >
            <Home>
                <ContainerItens>
                    <ContainerItemName>
                        <ItemName>Nome da Moeda</ItemName>
                        <InputEditUser
                            type="text"
                            value={cardTitle}
                            onChange={onChangeTitle}
                        />
                    </ContainerItemName>
                    <ContainerItemName>
                        <ItemName>Rendimento</ItemName>
                        <InputEditUserSelect
                            onChange={onChangePrice}
                        />
                    </ContainerItemName>
                    <ContainerItemName>
                        <ItemName>Valor Do Rendimento</ItemName>
                        <InputEditUser
                            type="text"
                            value={cardPrice}
                            onChange={onChangeValorize}
                        />
                    </ContainerItemName>
                    <ContainerItemName>
                        <ItemName>Porcentagem</ItemName>
                        <InputEditUser
                            type="text"
                            value={cardPercentage}
                            onChange={onChangePercentage}
                        />
                    </ContainerItemName>
                    <ButtonChange onClick={renderNewValue}>Alterar Informações</ButtonChange>
                </ContainerItens>
            </Home>
        </Modal>
    );
};

export default ModalCard;
