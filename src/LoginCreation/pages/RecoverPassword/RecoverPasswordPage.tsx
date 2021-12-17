// libraries
import React from 'react';

// JS
import {
    Container,
    ContainerOver,
    Containerfirst,
    ContainerSecond,
    TextHard,
    Button,
    TextIzi,
    InputIzi,
    InputHard,
    ButtonIzi,
} from './recoverPsswordStyles';

const RecoverPasswordPage: React.FC = () => (
    <Container>
        <ContainerOver>
            <Containerfirst>
                <TextHard>Welcome Back!</TextHard>
                <Button>sing up</Button>
            </Containerfirst>
            <ContainerSecond>
                <TextIzi>Create Account</TextIzi>
                <InputIzi type="text" placeholder="Email" />
                <InputHard type="password" placeholder="Senha" />
                <ButtonIzi>sing in</ButtonIzi>
            </ContainerSecond>
        </ContainerOver>
    </Container>
);

export default RecoverPasswordPage;
