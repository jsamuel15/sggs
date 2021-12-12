import React from 'react';

// js
import {
    Container,
    Text,
} from './galeryStyles';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';

// methods
const About: React.FC = () => {
    const allUsers = [
        {
            id: 1,
            name: 'Pedro',
        },
        {
            id: 2,
            name: 'Samuel',
        },
        {
            id: 3,
            name: 'Saulo',
        },
        {
            id: 4,
            name: 'Adler',
        },
        {
            id: 5,
            name: 'Diego',
        },
    ];
    const callUsers = allUsers.find((p) => p.name === 'Samuel' && p.id === 2);
    // const lastArray = allUsers[allUsers.length - 1];
    // const allArray = allUsers.map((item) => item.id);

    // main
    return (
        <Container>
            <HeaderComponent />
            <Text>
                {callUsers?.name}
                {/* {lastArray?.name} */}
            </Text>
        </Container>
    );
};

export default About;
