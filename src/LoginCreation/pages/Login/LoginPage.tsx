// libraries
import React from 'react';

// JS
import {
    Container,
    ContainerOver,
    Containerfirst,
    ContainerSecond,
    TextHard,
    Paragraph,
    ParagraphHard,
    Button,
    TextIzi,
    ParagraphIzi,
    InputIzi,
    InputHard,
    ButtonIzi,
} from './loginStyles';

const LoginPage: React.FC = () => (
    <Container>
        <ContainerOver>
            <Containerfirst>
                <TextHard>Welcome Back!</TextHard>
                <Paragraph>To keep connected with us</Paragraph>
                <ParagraphHard>please login with your personal info</ParagraphHard>
                <Button>sing up</Button>
            </Containerfirst>
            <ContainerSecond>
                <TextIzi>Create Account</TextIzi>
                <ParagraphIzi>or use your email for regitration:</ParagraphIzi>
                <InputIzi type="text" placeholder="Email" />
                <InputHard type="password" placeholder="Senha" />
                <ButtonIzi>sing in</ButtonIzi>
            </ContainerSecond>
        </ContainerOver>
    </Container>
);

export default LoginPage;
