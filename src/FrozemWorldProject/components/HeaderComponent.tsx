// libraries
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// images
import iconProfile from '../assets/images/iconProfile.png';

// js
import {
    Input,
    Header,
    DivNameUser,
    DivPhotoUser,
    ButtonExit,
    NameUser,
    ButtonMyAccount,
    DivInputArea,
    ContainerAreaUser,
    ContainerAreaInfo,
} from './headerStyles';
import { itemCardInterfaces } from '../interfaces';
import { RootState } from '../store';
import { logoutAuth } from '../store/modules/user/actions';

// components
import ModalUserPage from './modalUserInfo/modaUserPage';
// navigation
import Navigation from '../routes/navigation';

// interfaces
interface Props {
    search: string,
    setSearch: (v: string) => void,
    setAllList: (v: Array<itemCardInterfaces>) => void,
    setOpenScrollBar: (v: boolean) => void,
}

const HeaderComponent = (props: Props): React.ReactElement => {
    // useSelector
    const user = useSelector((state: RootState) => state.user.user);

    // dispatch
    const dispatch = useDispatch();

    // consts
    const [visibleProfile, setVisibleProfile] = useState(false);
    const [open, setOpen] = useState<any>(false);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [pathRoute, setPathRoute] = useState<string>('');

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
        const newList = user.allCards.filter(
            (v: any) => v.title.toUpperCase().includes(value.toUpperCase()),
        );
        setAllList(newList);
    };
    const VisibleItem = () => {
        setVisibleProfile(!visibleProfile);
    };

    // methods
    const onLogout = () => {
        dispatch(logoutAuth());
        setRedirect(true);
        setPathRoute('/');
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // main
    return (
        <Header>
            <DivInputArea>
                <Navigation pathRoute={pathRoute} redirect={redirect} />
                <Input placeholder="Faça sua busca" value={search} onChange={onChangeSearch} />
                <ContainerAreaInfo>
                    <DivNameUser>
                        <DivPhotoUser
                            src={iconProfile}
                            onClick={VisibleItem}
                        />
                        <ContainerAreaUser visibleProfile={visibleProfile}>
                            <NameUser>{user?.name}</NameUser>
                            <ButtonMyAccount onClick={handleOpen}>Minha Conta</ButtonMyAccount>
                            <ButtonExit onClick={onLogout}>Sair</ButtonExit>
                        </ContainerAreaUser>
                    </DivNameUser>
                </ContainerAreaInfo>
            </DivInputArea>
            {ModalUserPage(open, handleClose)}
        </Header>
    );
};
export default HeaderComponent;
