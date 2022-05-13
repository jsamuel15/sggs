// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces
interface Container {
    background: string,
}

export const Container = styled.div<Container>`
    background-image: ${(props) => (`url(${props.background})`)};
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
`;
