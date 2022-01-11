// libraries
import styled from 'styled-components';

// JS
import colors from '../../styles/colors';

export const Container = styled.div`
    background: ${colors.basic.purple};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;

export const Text = styled.text`
    display: flex;
    color: ${colors.basic.white};
    font-size: 50px;
`;

export const Input = styled.input`
    color: ${colors.theme.darkslategray};
    border-radius: 5px;
    border: 2px solid ${colors.basic.black};
    background-color: ${colors.basic.gray};
    width: 60%;
    height: 40px;
    margin-bottom: 15px;
    padding: 8px;
    display: flex;
`;

export const Button = styled.button`
    border-radius: 3px;
    border: none;
    background-color: ${colors.theme.dodgerblue};
    width: 200px;
    cursor: pointer;
    height: 40px;
    border-radius: 20px;
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
`;
