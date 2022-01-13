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
    align-items: center;
`;

export const Text = styled.h6`
    display: flex;
    color: ${colors.basic.white};
    font-size: 50px;
    margin-top: 200px;
    margin-bottom: 15px;
`;

export const Input = styled.input`
    color: ${colors.theme.darkslategray};
    border-radius: 5px;
    border: 1px solid ${colors.basic.black};
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

export const Button = styled.button`
    border-radius: 5px;
    border: 1px solid ${colors.theme.darkblue};
    background-color: ${colors.theme.dodgerblue};
    width: 30%;
    height: 40px;
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
