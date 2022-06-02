// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces
interface ButtonInterfaces {
    activeCursor: boolean,
}

export const Container = styled.div`
    background-color: ${colors.basic.black};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;

export const ContainerInner = styled.div`
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
    background-color: ${colors.theme.slateGrey};
    color: ${colors.basic.black};
    border-radius: 5px;
    border: 1px solid ${colors.theme.darkGray};
    width: 30%;
    height: 40px;
    margin-bottom: 15px;
    padding: 8px;
    margin-left: 35%;
    display: flex;
    @media (max-width: 800px) {
        min-height: 30px;
        font-size: 10px;
    }
    @media (max-height: 450px) {
        min-height: 30px;
        font-size: 10px;
        margin-top: 2px;
    }
`;

export const TextTipe = styled.text`
    border-radius: 20px;
    color: ${colors.basic.white};
    cursor: pointer;
    font-size: 16px;
    display: flex;
    margin-bottom: 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* margin-left: 45%; */
`;

export const TextAction = styled.text`
    border-radius: 20px;
    color: ${colors.basic.white};
    cursor: pointer;
    font-size: 16px;
    display: flex;
    margin-bottom: 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* margin-left: 43%; */
`;

export const Button = styled.button<ButtonInterfaces>`
    background-color: transparent;
    color: ${colors.basic.white};
    border: solid 2px ${colors.basic.white};
    display: flex;
    cursor: ${(props) => (props.activeCursor ? 'default' : 'pointer')};
    width: 90px;
    height: 40px;
    border-radius: 20px;
    font-size: 12px;
    vertical-align: middle;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: 47%;
    margin-bottom: 15px;
    transition-duration: 400ms;
    :hover {
        background-color: ${(props) => (props.activeCursor ? colors.basic.gray : colors.basic.white)};
        color: ${(props) => (props.activeCursor ? colors.basic.white : colors.basic.black)};
    }
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
