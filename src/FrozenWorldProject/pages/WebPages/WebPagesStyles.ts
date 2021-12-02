// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces

interface Container {
    background: string,
}

export const Container = styled.div`
    background-color: ${colors.basic.blue};
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

export const Text = styled.text`
    color: ${colors.basic.white};
    padding: 90px 800px 10px 0px;
    align-items: center;
    font-size: 70px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 40px;
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
    color: ${colors.basic.white};
    cursor: pointer;
    width: 90px;
    height: 40px;
    border: solid 2px ${colors.theme.deepskyblue};
    border-radius: 20px;
    font-size: 12px;
    vertical-align: middle;
    text-align: center;
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
    border: none;
    border-radius: 20px;
    font-size: 12px;
    margin-right: 350px;
    vertical-align: middle;
    text-align: center;
    align-items: center;
    justify-content: center;
`;
