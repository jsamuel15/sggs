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
    ];
    const callUsers = allUsers.find((p) => p.name === 'Pedro' && p.id === 1);

    // main
    return (
        <Container>
            <HeaderComponent />
            <Text>
                {callUsers?.name}
            </Text>
        </Container>
    );
};

export default About;
