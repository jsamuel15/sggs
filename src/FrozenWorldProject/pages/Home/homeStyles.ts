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
    margin-right: 90px;
    margin-left: 70px;
    align-items: center;
    text-align: center;
    font-family: "Times New Roman";
    font-size: 30px;
`;

export const ButtonTree = styled.button`
    background-color: transparent;
    color: ${colors.basic.white};
    border: solid 2px ${colors.theme.deepskyblue};
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
    margin-top: 1px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 10px;
    //margin-left: 5px;
    align-items: center;
    justify-content: center;
`;

export const ButtonSix = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-top: 1px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 10px;
    //margin-left: 5px;
    align-items: center;
    justify-content: center;
`;

export const ButtonSeven = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-top: 1px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 10px;
    //margin-left: 5px;
    align-items: center;
    justify-content: center;
`;

export const ButtonEigth = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-top: 1px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 5px;
    //margin-left: 3px;
    margin-right: 30px;
    align-items: center;
    justify-content: center;
`;

export const Soon = styled.img`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SoonTwo = styled.img`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SoonTree = styled.img`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 200px;
`;

export const ContainerInner = styled.div`
    justify-content: space-between;
    align-items: center;
`;

export const H1 = styled.h1`
    color: ${colors.basic.white};
    padding: 90px 300px 10px 300px;
    align-items: center;
    font-size: 70px;
    text-align: center;
`;

export const H3 = styled.h3`
    color: ${colors.basic.white};
    padding: 20px 300px 10px 250px;
    font-size: 20px;
    margin-top: 10px;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
`;

export const H6 = styled.h6`
    color: ${colors.basic.white};
    padding: 20px 400px 10px 400px;
    margin-top: 10px;
    margin-bottom: 40px;
    align-items: center;
    text-align: center;
`;

export const Hr = styled.div`
    background-color: ${colors.basic.white};
    width: 50px;
    height: 5px;
    margin-left: 650px;
    border-radius: 20px;
`;

export const Button = styled.button`
    background-color: transparent;
    display: flex;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-left: 10px;
    margin-right: 320px;
    width: 140px;
    height: 45px;
    border: solid 2px ${colors.basic.white};
    border-radius: 20px;
    font-size: 15px;
    padding: 11px 21px;
    float: right;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const ButtonTwo = styled.button`
    background-color: ${colors.basic.black};
    display: flex;
    color: ${colors.basic.white};
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    width: 140px;
    height: 45px;
    border: solid 2px ${colors.basic.black};
    border-radius: 20px;
    font-size: 15px;
    padding: 11px 21px;
    float: right;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    margin-right: 390px;
    float: right;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
`;

export const IconTwo = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    margin-left: 100px;
    margin-right: 70px;
    margin-bottom: 200px;
    float: right;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
