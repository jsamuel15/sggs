// libraries
import React, { useEffect } from 'react';

// js
import { Container, HeaderHome } from './homeStyles';

const HomePage: React.FC = () => {
    // constants
    const DefaultInfoUser = {
        email: '',
        name: '',
        telephone: '',
        CPF: '',
    };
    const SetUser = localStorage.getItem('infoUser') || '';
    const GetUser = localStorage.getItem('EmailUser') || '';
    const FormatGetInfoUser = SetUser?.length > 6 ? JSON.parse(SetUser) : DefaultInfoUser;

    // useEffect
    useEffect(() => {
        if (!GetUser && !SetUser) {
            window.location.replace('/');
        }
    }, []);

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
