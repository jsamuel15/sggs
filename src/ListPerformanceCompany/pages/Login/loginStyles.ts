// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces
interface ButtonInterfaces {
    activeCursor?: boolean,
}

interface TextActionInterFaces{
    activeText?: boolean,
}

// styles
export const Header = styled.header`
    color: ${colors.basic.black};
`;

export const H1 = styled.h1`
    color: ${colors.basic.white};
    padding: 0px 0px 50px 0px;
`;

export const Container = styled.div`
    background-color: ${colors.basic.backgroundAuth};
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;

export const Home = styled.div`
    max-height: 100vh;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    background-color: ${colors.basic.backgroundAuth};
`;

export const ContainerInner = styled.div`
    background-color: ${colors.basic.backgroundAuth};
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 50px;
    padding-bottom: 20px;
    flex-direction: column;
    width: 100%;
`;

export const Input = styled.input`
    color: ${colors.basic.black};
    background-color: ${colors.basic.white};
    padding-left: 10px;
    border-radius: 5px;
    border: none;
    width: 70%;
    height: 40px;
    margin-bottom: 15px;
    ::placeholder{
       color: ${colors.basic.dimGrey};
    }
    @media (max-width: 1024px) {
        height: 35px;
        font-size: 12px;
    }
    @media (max-width: 600px) {
        height: 30px;
        font-size: 10px;
    }
`;

export const Button = styled.button<ButtonInterfaces>`
    background-color: ${(props) => (props.activeCursor ? colors.basic.dimGrey : colors.basic.green)};
    color: ${colors.basic.white};
    padding: 15px 0px 15px 0px;
    width: 200px;
    border-radius: 10px;
    font-size: 15px;
    cursor: ${(props) => (props.activeCursor ? 'default' : 'pointer')};
    border: none;
    :hover {
        background-color: ${(props) => (props.activeCursor ? colors.basic.dimGrey : colors.basic.greenLimon)};
    }
    @media (max-width: 600px) {
        width: 150px;
    }
    @media (max-width: 500px) {
        width: 100px;
    }
`;

export const TextAction = styled.text<TextActionInterFaces>`
    border-radius: 20px;
    color: ${(props) => (props.activeText ? colors.basic.green : colors.basic.greenLimon)};
    cursor: ${(props) => (props.activeText ? 'default' : 'pointer')};
    animation-name: none;
    font-size: 16px;
    cursor: pointer;
    padding: 15px 0px 0px 0px;
    :hover {
        color: ${(props) => (props.activeText ? colors.basic.green : colors.basic.greenLimon)};
    }
`;
