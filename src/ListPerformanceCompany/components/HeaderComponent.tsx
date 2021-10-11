// libraries
import React from 'react';

// js
import { Input, Header } from './headerStyles';
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
        </Header>
    );
};
export default HeaderComponent;
