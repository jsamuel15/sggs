// libraries
import React from 'react';

// js
import {
    Container,
    TextIce,
    TextBox,
    TextSize,
    TextInner,
    ContainerIce,
    ContainerHard,
    ContainerOpen,
    ContainerBox,
    ContainerSize,
    ContainerInner,
} from './aboutStyles';

// components
import HeaderComponent from '../../components/Header/HeaderComponent';

// main
const About: React.FC = () => (
    <Container>
        <HeaderComponent />
        <ContainerOpen>
            <ContainerIce>
                <TextIce>
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised words which dont look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there isnt anything
                    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                    the Internet tend to repeat predefined chunks as necessary, making this the
                    first true generator on the Internet. It uses a dictionary of over 200 Latin
                    words, combined with a handful of model sentence structures, to generate
                    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                    always free from repetition, injected humour, or non-characteristic words
                    etc.
                </TextIce>
            </ContainerIce>
            <ContainerBox>
                <TextBox>
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised words which dont look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there isnt anything
                    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                    the Internet tend to repeat predefined chunks as necessary, making this the
                    first true generator on the Internet. It uses a dictionary of over 200 Latin
                    words, combined with a handful of model sentence structures, to generate
                    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                    always free from repetition, injected humour, or non-characteristic words
                    etc.
                </TextBox>
            </ContainerBox>
        </ContainerOpen>
        <ContainerHard>
            <ContainerSize>
                <TextSize>
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised words which dont look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there isnt anything
                    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                    the Internet tend to repeat predefined chunks as necessary, making this the
                    first true generator on the Internet. It uses a dictionary of over 200 Latin
                    words, combined with a handful of model sentence structures, to generate
                    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                    always free from repetition, injected humour, or non-characteristic words
                    etc.
                </TextSize>
            </ContainerSize>
            <ContainerInner>
                <TextInner>
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised words which dont look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there isnt anything
                    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                    the Internet tend to repeat predefined chunks as necessary, making this the
                    first true generator on the Internet. It uses a dictionary of over 200 Latin
                    words, combined with a handful of model sentence structures, to generate
                    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                    always free from repetition, injected humour, or non-characteristic words
                    etc.
                </TextInner>
            </ContainerInner>
        </ContainerHard>
    </Container>
);

export default About;
