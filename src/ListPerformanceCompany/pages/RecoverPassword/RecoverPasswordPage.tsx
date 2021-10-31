// libraries
import React, { useState } from 'react';

import Navigation from '../../routes/navigation';

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
    const [pathRoute, setPathRoute] = useState('');
    const [redirect, setRedirect] = useState(false);

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

    const Signin = () => {
        setRedirect(true);
        setPathRoute('/');
    };

    // main
    return (
        <Container>
            <Navigation pathRoute={pathRoute} redirect={redirect} />
            <Input type="email" placeholder="E-mail" value={email} onChange={onChangeEmail} />
            <Button
                disabled={ValidationDisabled()}
                activeCursor={ValidationDisabled()}
            >
                <TextButton>Acessar</TextButton>
            </Button>
            <TextAction onClick={Signin}>
                Já tem uma conta, Acesse.
            </TextAction>
        </Container>
    );
};

export default App;
