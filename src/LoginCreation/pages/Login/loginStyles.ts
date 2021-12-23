// libraries
import styled from 'styled-components';

// JS
import colors from '../../styles/colors';

// interfaces
interface ButtonInterfaces {
    activeCursor: boolean,
}

// styles
export const Container = styled.div`
    background-color: ${colors.theme.lightGray};
    min-width: 100vw;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
    overflow: hidden;
`;

export const ContainerOver = styled.div`
    display: flex;
    background-color: ${colors.basic.white};
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    min-width: 80%;
    height: 70vh;
`;

export const ContainerFirst = styled.div`
    background-color: ${colors.theme.hex};
    display: flex;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 40%;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const TextHard = styled.text`
    color: ${colors.basic.white};
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 800px) {
        font-size: 20px;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${colors.basic.white};
    border-radius: 15px;
    font-size: 10px;
    padding: 10px;
    cursor: pointer;
    margin: 10px;
    border: 1px solid ${colors.basic.white};
    width: 50%;
    text-transform: uppercase;
    @media (max-width: 800px) {
        width: 90%;
    }
    @media (max-width: 600px) {
        background-color: transparent;
        color: ${colors.basic.black};
        width: 60%;
    }
`;

export const ContainerSecond = styled.div`
    background-color: ${colors.basic.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 58%;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    @media (max-width: 600px) {
        width: 100%;
        border-radius: 15px;
    }
`;

export const TextIzi = styled.text`
    color: ${colors.theme.hex};
    margin: 20px;
    font-weight: bold;
    font-size: 30px;
    @media (max-width: 800px) {
        font-size: 20px;
    }
    @media (max-height: 450px) {
        margin: 0px;
        font-size: 20px;
    }
`;

export const TextClone = styled.text`
    color: ${colors.theme.hex};
    margin: 10px;
    align-self: center;
    cursor: pointer;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px;
    font-size: 12px;
    @media (max-width: 800px) {
        font-size: 10px;
    }
    @media (max-height: 450px) {
        margin: 5px;
    }
`;

export const InputIzi = styled.input`
    background-color: ${colors.theme.lightGray};
    display: flex;
    border-radius: 5px;
    border: none;
    min-height: 40px;
    width: 60%;
    margin: 5px;
    padding-left: 10px;
    align-self: center;
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

export const ButtonIzi = styled.button<ButtonInterfaces>`
    background-color: ${(props) => (props.activeCursor ? colors.basic.gray : colors.theme.hex)};
    border-radius: 15px;
    color: ${colors.basic.white};
    text-transform: uppercase;
    font-size: 10px;
    padding: 10px;
    border: none;
    cursor: ${(props) => (props.activeCursor ? 'default' : 'pointer')};
    width: 60%;
    margin: 10px;
    :hover {
        background-color: ${(props) => (props.activeCursor ? colors.basic.gray : colors.theme.aquaMarine)};
    }
    @media (max-height: 450px) {
        margin-top: 10px;
        padding: 5px;
    }
`;
