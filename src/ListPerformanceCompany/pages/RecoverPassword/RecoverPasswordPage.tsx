// libraries
import React, { useState } from 'react';

// js
import {
    Container,
    Input,
    Button,
    TextAction,
    TextButton,
} from './RecoverPasswordStyles';

const App: React.FC = () => {
    // states
    const [email, setEmail] = useState('');

    // methods
    const onChangeEmail = (txt: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(txt.target.value);
    };

    const ValidationDisabled = () => {
        if (email.length >= 6 && email.includes('@')) {
            return false;
        }
        return true;
    };

    // main
    return (
        <Container>
            <Input type="email" placeholder="E-mail" value={email} onChange={onChangeEmail} />
            <Button
                disabled={ValidationDisabled()}
                activeCursor={ValidationDisabled()}
            >
                <TextButton>Acessar</TextButton>
            </Button>
            <TextAction onClick={() => window.location.replace('/')}>
                Caso tenha uma conta, Acesse.
            </TextAction>
        </Container>
    );
};

export default App;
