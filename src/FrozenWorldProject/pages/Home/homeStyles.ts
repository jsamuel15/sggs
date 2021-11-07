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
    height: 60px;
    border: solid 1px ${colors.basic.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const Text = styled.text`
    color: ${colors.basic.black};
    margin-right: auto;
`;

export const ButtonTree = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.black};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 1px;
    width: 100px;
    height: 45px;
    border: solid 2px ${colors.basic.black};
    border-radius: 20px;
    font-size: 15px;
    padding-left: 10px;
    margin-left: auto;
`;

export const ButtonFour = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.black};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 1px;
    width: 100px;
    height: 45px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    padding-left: 10px;
    margin-left: auto;
`;

export const ButtonFive = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.black};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 1px;
    width: 100px;
    height: 45px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    padding-left: 10px;
    margin-left: auto;
`;

export const ButtonSix = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.black};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 1px;
    width: 100px;
    height: 45px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    padding-left: 10px;
    margin-left: auto;
`;

export const ButtonSeven = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.black};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 1px;
    width: 100px;
    height: 45px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    padding-left: 10px;
    margin-left: auto;
`;

export const ButtonEigth = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.black};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 2px;
    width: 100px;
    height: 45px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    padding-left: 10px;
    margin-left: auto;
`;

export const ContainerInner = styled.div`
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const H1 = styled.h1`
    color: ${colors.basic.black};
    padding: 170px 280px 10px 400px;
    align-items: center;
`;

export const H4 = styled.h4`
    color: ${colors.basic.black};
    padding: 20px 300px 10px 400px;
    margin-top: 10px;
`;

export const H6 = styled.h6`
    color: ${colors.basic.black};
    padding: 20px 300px 10px 400px;
    margin-top: 10px;
`;

export const Button = styled.button`
    background-color: ${colors.basic.black};;
    display: flex;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-right: 10px;
    margin-top: 10px;
    width: 100px;
    height: 45px;
    border: solid 2px ${colors.basic.black};
    border-radius: 20px;
    font-size: 15px;
    padding: 11px 21px;
    float: right;
    vertical-align: middle;
`;

export const ButtonTwo = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-left: 400px;
    margin-top: 10px;
    width: 100px;
    height: 45px;
    border: solid 2px ${colors.basic.black};
    border-radius: 20px;
    font-size: 15px;
    padding: 11px 21px;
    float: center;
    vertical-align: middle;
`;
