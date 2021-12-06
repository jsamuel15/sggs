// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces

interface Container {
    background: string,
}

export const Container = styled.div`
    background-color: ${colors.basic.orange};
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;

export const Header = styled.div`
    background-color: transparent;
    color: ${colors.basic.black};
    height: 70px;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
    flex-wrap: wrap;
`;

export const ContainerOpen = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const ContainerHard = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const ContainerIce = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    margin-top: 10px;
    flex-direction: row;
`;

export const TextIce = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerBox = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    margin-top: 10px;
    margin-left: 50px;
    flex-direction: row;
`;

export const TextBox = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerSize = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: row;
`;

export const TextSize = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerCounter = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: row;
    margin-left: 50px;
`;

export const TextCounter = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerIzi = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: row;
    margin-left: 50px;
`;

export const TextIzi = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerInner = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    margin-left: 50px;
    flex-direction: row;
`;

export const TextInner = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerCall = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    margin-top: 10px;
    margin-left: 50px;
    flex-direction: row;
`;

export const TextCall = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerEnd = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: row;
    margin-left: 50px;
`;

export const TextEnd = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerStrike = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: row;
    margin-left: 50px;
`;

export const TextStrike = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerEasy = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    margin-top: 10px;
    margin-left: 50px;
    flex-direction: row;
`;

export const TextEasy = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerSkil = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    margin-top: 10px;
    margin-left: 50px;
    flex-direction: row;
`;

export const TextSkil = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const ContainerLife = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    margin-top: 10px;
    margin-left: 50px;
    flex-direction: row;
`;

export const TextLife = styled.text`
    color: ${colors.basic.black};
    display: flex;
    overflow: auto;
`;

export const Button = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-left: 350px;
    margin-top: 1px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    //padding-left: 10px;
    vertical-align: middle;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const ButtonTwo = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 1px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 10px;
    margin-left: 2px;
    align-items: center;
    justify-content: center;
`;

export const ButtonTree = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 1px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 10px;
    margin-left: 2px;
    align-items: center;
    justify-content: center;
`;

export const ButtonFour = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 1px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 10px;
    margin-left: 2px;
    align-items: center;
    justify-content: center;
`;

export const ButtonFive = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 1px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 10px;
    margin-left: 2px;
    align-items: center;
    justify-content: center;
`;

export const ButtonSix = styled.button`
    background-color: transparent;
    display: flex;
    color: ${colors.basic.white};
    cursor: pointer;
    width: 90px;
    height: 40px;
    border: solid 2px ${colors.theme.deepskyblue};
    border-radius: 20px;
    font-size: 12px;
    //padding-left: 5px;
    margin-right: 350px;
    vertical-align: middle;
    text-align: center;
    align-items: center;
    justify-content: center;
`;
