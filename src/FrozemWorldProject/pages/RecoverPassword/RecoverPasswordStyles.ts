// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces
interface ButtonInterfaces {
    activeCursor?: boolean,
}
interface TextActionInterFaces {
    activeText?: boolean,
}
// styles
export const Container = styled.div`
    display: flex;
    flex: 1;
    min-height: 100vh;
    background-color: ${colors.basic.ligthBlack};
    align-items: center;
    justify-content: center;
    flex-direction:column;
    margin: theme.spacing(1);
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

export const TextButton = styled.text`
    color: ${colors.basic.white};
    font-weight: bold;
    font-size: 16px;
    @media (max-width: 400px) {
        font-size: 13px;
    }
    @media (max-width: 200px) {
        font-size: 11px;
    }
`;

export const TextAction = styled.text<TextActionInterFaces>`
    border-radius: 20px;
    color: ${colors.basic.black};
    animation-name: none;
    font-size: 16px;
    cursor: pointer;
    padding: 15px 0px 0px 0px;
    :hover {
        color: ${(props) => (props.activeText ? colors.basic.dimGrey : colors.basic.green)};
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
