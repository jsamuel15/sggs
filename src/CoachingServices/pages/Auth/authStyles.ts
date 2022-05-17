// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;

export const ContainerInner = styled.div`
    background-color: ${colors.theme.backgroundAuth};
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;

export const Text = styled.h1`
    color: ${colors.basic.white};
    padding: 90px 300px 10px 300px;
    align-items: center;
    font-size: 70px;
    text-align: center;
`;

export const Texting = styled.h3`
    color: ${colors.basic.white};
    padding: 20px 300px 10px 250px;
    font-size: 20px;
    margin-top: 10px;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
`;

export const Input = styled.input`
    background-color: ${colors.theme.hex};
    color: ${colors.theme.silver};
    border-radius: 5px;
    border: 1px solid ${colors.theme.darkGray};
    width: 30%;
    /* height: 40px; */
    margin-bottom: 15px;
    padding: 8px;
    display: flex;
    ::placeholder{
        color: ${colors.basic.gray};
    }
`;

export const TextAction = styled.text`
    border-radius: 20px;
    color: ${colors.basic.white};
    cursor: pointer;
    font-size: 16px;
    display: flex;
    margin-bottom: 15px;
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${colors.basic.white};
    border: solid 2px ${colors.basic.white};
    display: flex;
    cursor: pointer;
    width: 90px;
    height: 40px;
    border-radius: 20px;
    font-size: 12px;
    vertical-align: middle;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
`;

export const ButtonTwo = styled.button`
    background-color: transparent;
    color: ${colors.basic.white};
    border: solid 2px ${colors.basic.white};
    display: flex;
    cursor: pointer;
    width: 90px;
    height: 40px;
    border-radius: 20px;
    font-size: 12px;
    vertical-align: middle;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
`;
