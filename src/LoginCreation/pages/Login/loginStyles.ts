// libraries
import styled from 'styled-components';

// JS
import colors from '../../styles/colors';

// styles
export const Container = styled.div`
    background-color: ${colors.theme.lightGray};
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;

export const ContainerOver = styled.div`
    display: flex;
    font-family: 'Open Sans'. sans-serif;
    background-color: ${colors.basic.white};
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    width: 960px;
    height: 50%;
    margin-left: 180px;
    margin-top: 150px;
`;

export const Containerfirst = styled.div`
    background-color: ${colors.theme.hex};
    display: flex;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    flex-direction: column;
    text-align: center;
    flex: 1 0 auto;
    padding: 15% 90px;
`;

export const TextHard = styled.h2`
    color: ${colors.basic.white};
    font-size: 30px;
    font-weight: bold;
    text-tranform: captalize;
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${colors.basic.white};
    border-radius: 15px;
    text-transform: uppercase;
    font-size: 10px;
    padding: 10px 10px;
    cursor: pointer;
    margin: 8px;
    border: 1px solid ${colors.basic.white};
    width: 150px;
    text-align: center;
    align-self: center;
    text-transform: uppercase;
`;

export const ContainerSecond = styled.div`
    background-color: ${colors.basic.white};
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 2 0 auto;
    padding: 9% 20%;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
`;

export const TextIzi = styled.h2`
    color: ${colors.theme.hex};
    margin: 20px;
    max-height: 10px;
    max-width: 10px;
    align-self: center;
`;

export const TextClone = styled.h6`
    color: ${colors.theme.hex};
    margin: 20px;
    max-height: 10px;
    max-width: 10px;
    align-self: center;
`;

export const InputIzi = styled.input`
    background-color: ${colors.theme.lightGray};
    display: flex;
    border-radius: 5px;
    border: none;
    max-height: 45px;
    max-width: 90%;
    margin: 8px;
    padding-left: 10px;
`;

export const InputHard = styled.input`
    background-color: ${colors.theme.lightGray};
    display: flex;
    border-radius: 5px;
    border: none;
    max-height: 45px;
    max-width: 90%;
    margin: 8px;
    padding-left: 10px;
`;

export const ButtonIzi = styled.button`
    background-color: ${colors.theme.hex};
    color: ${colors.basic.white};
    border-radius: 15px;
    text-transform: uppercase;
    font-size: 10px;
    padding: 10px 50px;
    cursor: pointer;
    border: 1px solid;
    width: 150px;
    align-self: center;
`;
