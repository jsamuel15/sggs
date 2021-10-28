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
    border-radius: 5px;
    border: 2px solid ${colors.basic.grey};
    background-color: ${colors.basic.white};
    width: 60%;
    height: 40px;
    margin-bottom: 15px;
    padding: 8px;
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
    color: ${colors.basic.ligthBlack};
    animation-name: none;
    font-size: 16px;
    cursor: pointer;
    :hover {
        color: ${(props) => (props.activeText ? colors.basic.grey : colors.basic.green)};
    }
`;

export const Button = styled.button<ButtonInterfaces>`
    border-radius: 3px;
    border: none;
    background-color: ${(props) => (props.activeCursor ? colors.basic.grey : colors.basic.green)};;
    width: 200px;
    cursor: ${(props) => (props.activeCursor ? 'default' : 'pointer')};
    height: 40px;
    border-radius: 20px;
    color: ${colors.basic.white};
    margin-bottom: 15px;
    margin-top: 5px;
    transition-duration: 400ms;
    :hover {
        background-color: ${(props) => (props.activeCursor ? colors.basic.grey : colors.basic.green)};
    }
    @media (max-width: 1300px) {
        width: 150px;
    }
    @media (max-width: 500px) {
        width: 100px;
    }
`;
