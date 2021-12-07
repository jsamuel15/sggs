import React from 'react';

// js
import {
    Container,
    Header,
    TextIce,
    TextBox,
    TextSize,
    TextInner,
    TextEasy,
    TextCall,
    TextIzi,
    TextEnd,
    TextSkil,
    TextLife,
    TextTime,
    TextHard,
    TextCounter,
    TextStrike,
    TextCamouflage,
    TextCel,
    TextWon,
    TextWin,
    TextLocation,
    TextHero,
    ContainerHero,
    ContainerCamouflage,
    ContainerCel,
    ContainerIce,
    ContainerWon,
    ContainerWin,
    ContainerHard,
    ContainerOpen,
    ContainerBox,
    ContainerSize,
    ContainerLocation,
    ContainerInner,
    ContainerEasy,
    ContainerCall,
    ContainerIzi,
    ContainerTime,
    ContainerCounter,
    ContainerStrike,
    ContainerEnd,
    ContainerSkil,
    ContainerLife,
    Button,
    ButtonTwo,
    ButtonTree,
    ButtonFour,
    ButtonFive,
    ButtonSix,
} from './contactStyles';

// renders
const About: React.FC = () => (
    <Container>
        <Header>
            <Button onClick={() => window.location.replace('/home')}>HOME</Button>
            <ButtonTwo onClick={() => window.location.replace('/page')}>PAGES</ButtonTwo>
            <ButtonTree onClick={() => window.location.replace('/about')}>ABOUT</ButtonTree>
            <ButtonFour onClick={() => window.location.replace('/galeria')}>GALERY</ButtonFour>
            <ButtonFive onClick={() => window.location.replace('/nossaEquipe')}>OUR TEAM</ButtonFive>
            <ButtonSix onClick={() => window.location.replace('/contato')}>CONTACT</ButtonSix>
        </Header>
        <ContainerOpen>
            <ContainerIce>
                <TextIce>
                    (81) 99854-4893
                </TextIce>
            </ContainerIce>
            <ContainerBox>
                <TextBox>
                    (83) 99536-5876
                </TextBox>
            </ContainerBox>
            <ContainerCall>
                <TextCall>
                    (77) 14215-5532
                </TextCall>
            </ContainerCall>
            <ContainerEasy>
                <TextEasy>
                    (77) 14215-3255
                </TextEasy>
            </ContainerEasy>
            <ContainerIzi>
                <TextIzi>
                    (77) 27345-5532
                </TextIzi>
            </ContainerIzi>
            <ContainerCounter>
                <TextCounter>
                    (77) 94228-3289
                </TextCounter>
            </ContainerCounter>
            <ContainerHard>
                <TextHard>
                    (49) 35299-4414
                </TextHard>
            </ContainerHard>
            <ContainerTime>
                <TextTime>
                    (77) 94228-3445
                </TextTime>
            </ContainerTime>
            <ContainerSize>
                <TextSize>
                    (84) 99745-5342
                </TextSize>
            </ContainerSize>
            <ContainerInner>
                <TextInner>
                    (91) 8335-4538
                </TextInner>
            </ContainerInner>
            <ContainerEnd>
                <TextEnd>
                    (91) 8335-7579
                </TextEnd>
            </ContainerEnd>
            <ContainerStrike>
                <TextStrike>
                    (91) 8335-4868
                </TextStrike>
            </ContainerStrike>
            <ContainerSkil>
                <TextSkil>
                    (91) 8335-4097
                </TextSkil>
            </ContainerSkil>
            <ContainerLife>
                <TextLife>
                    (91) 8335-4537
                </TextLife>
            </ContainerLife>
            <ContainerCamouflage>
                <TextCamouflage>
                    (91) 8335-5555
                </TextCamouflage>
            </ContainerCamouflage>
            <ContainerCel>
                <TextCel>
                    (91) 75433-5555
                </TextCel>
            </ContainerCel>
            <ContainerWon>
                <TextWon>
                    (91) 75433-7777
                </TextWon>
            </ContainerWon>
            <ContainerLocation>
                <TextLocation>
                    (91) 75433-3434
                </TextLocation>
            </ContainerLocation>
            <ContainerWin>
                <TextWin>
                    (91) 76993-7777
                </TextWin>
            </ContainerWin>
            <ContainerHero>
                <TextHero>
                    (91) 79347-7685
                </TextHero>
            </ContainerHero>
        </ContainerOpen>
    </Container>
);

export default About;
