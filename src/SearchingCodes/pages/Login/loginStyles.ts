// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces
interface ButtonInterfaces {
    activeCursor: boolean,
}

// styles
export const Container = styled.div`
    background-image: ${colors.theme.backgroundAuth};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
    align-items: center;
`;

export const Text = styled.text`
    display: flex;
    color: ${colors.basic.white};
    font-size: 50px;
    margin-top: 180px;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Input = styled.input`
    color: ${colors.theme.darkslategray};
    border-radius: 5px;
    border: 1px solid ${colors.theme.dimblack};
    background-color: ${colors.theme.darkslateblack};
    width: 30%;
    height: 40px;
    margin-bottom: 15px;
    padding: 8px;
    display: flex;
    ::placeholder{
        color: ${colors.basic.gray};
    }
`;

export const Button = styled.button<ButtonInterfaces>`
    border-radius: 5px;
    border: 1px solid ${colors.theme.darkblue};
    background-color: ${(props) => (props.activeCursor ? colors.basic.gray : colors.theme.dodgerblue)};
    width: 30%;
    min-height: 40px;
    cursor: pointer;
    color: ${colors.basic.white};
    margin-bottom: 15px;
    margin-top: 5px;
    transition-duration: 400ms;
`;

export const TextAction = styled.text`
    border-radius: 20px;
    color: ${colors.basic.white};
    cursor: pointer;
    font-size: 16px;
    display: flex;
    margin-bottom: 15px;
`;
