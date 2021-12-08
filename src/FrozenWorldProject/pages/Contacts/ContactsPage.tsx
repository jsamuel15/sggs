// libraries
import React from 'react';

// js
import { Container, AdjustBox } from './contactsStyles';
import contactsConstants from './contactsConstants';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';
import BoxContactComponent from './components/BoxContact/BoxContactComponent';

const About: React.FC = () => {
    const allBox = () => (
        contactsConstants.allContacts.map((v) => (
            <BoxContactComponent label={v.label} id={v.id} />
        ))
    );

    // main
    return (
        <Container>
            <HeaderComponent />
            <AdjustBox>
                {allBox()}
            </AdjustBox>
        </Container>
    );
};

export default About;
