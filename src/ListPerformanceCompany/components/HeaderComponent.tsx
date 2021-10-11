// libraries
import React from 'react';

// images
import iconProfile from '../assets/images/iconProfile.jpg';

// js
import {
    Input,
    Header,
    ContainerInfoUser,
    DivNameUser,
    DivPhotoUser,
    ButtonExit,
    NameUser,
} from './headerStyles';
import { itemCardInterfaces } from '../interfaces';
import allListJson from '../utils/AllListJson';

// interfaces
interface Props {
    search: string,
    setSearch: (v: string) => void,
    setAllList: (v: Array<itemCardInterfaces>) => void,
    setOpenScrollBar: (v: boolean) => void,
}

const HeaderComponent = (props: Props): React.ReactElement => {
    // constants
    const {
        search,
        setSearch,
        setAllList,
        setOpenScrollBar,
    } = props;

    // methods
    const onChangeSearch = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setOpenScrollBar(false);
        const { value } = txt.target;
        setSearch(value);
        const newList = allListJson.allCards.filter(
            (v) => v.title.toUpperCase().includes(value.toUpperCase()),
        );
        setAllList(newList);
    };

    return (
        <Header>
            <Input placeholder="Faça sua busca" value={search} onChange={onChangeSearch} />
            <ContainerInfoUser>
                <DivNameUser>
                    <DivPhotoUser src={iconProfile} />
                    <NameUser>Nome</NameUser>
                    <ButtonExit>Sair</ButtonExit>
                </DivNameUser>
            </ContainerInfoUser>
        </Header>
    );
};
export default HeaderComponent;
