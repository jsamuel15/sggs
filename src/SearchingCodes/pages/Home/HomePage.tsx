// libraries
import React from 'react';

// js
import { Container, HeaderHome } from './homeStyles';

const HomePage: React.FC = () => {
    // useEffect(() => {
    //     if () {
    //         window.location.replace('/home');
    //     }
    // }, []);

    const DefaultInfoUser = {
        email: '',
        name: '',
        telephone: '',
        CPF: '',
    };
    const GetInfoUser = localStorage.getItem('infoUser') || '';
    const FormatGetInfoUser = GetInfoUser?.length > 6 ? JSON.parse(GetInfoUser) : DefaultInfoUser;

    const Signout = () => {
        window.location.replace('/');
        localStorage.removeItem('EmailUser');
        localStorage.removeItem('infoUser');
    };

    return (
        <Container>
            <HeaderHome onClick={Signout}>SAIR</HeaderHome>
            <HeaderHome>{FormatGetInfoUser?.email}</HeaderHome>
            <HeaderHome>{FormatGetInfoUser?.name}</HeaderHome>
            <HeaderHome>{FormatGetInfoUser?.telephone}</HeaderHome>
            <HeaderHome>{FormatGetInfoUser?.CPF}</HeaderHome>
        </Container>
    );
};

export default HomePage;
