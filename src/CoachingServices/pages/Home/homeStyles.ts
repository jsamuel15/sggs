// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces
interface Container {
    background?: string,
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

export const ContainerInner = styled.div`
    background-color: ${colors.theme.backgroundAuth};
    background-image: ${colors.theme.backgroundAuth};
`;

export const Text = styled.h1`
    color: ${colors.basic.black};
    padding: 90px 300px 10px 300px;
    align-items: center;
    font-size: 70px;
    text-align: center;
`;

export const Texting = styled.h3`
    color: ${colors.basic.black};
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
    height: 40px;
    margin-bottom: 15px;
    padding: 8px;
    display: flex;
    ::placeholder{
        color: ${colors.basic.gray};
    }
`;

export const TextAction = styled.text`
    border-radius: 20px;
    color: ${colors.basic.black};
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
    margin-left: 47%;
    margin-bottom: 15px;
`;

export const ContainerCube = styled.div`
    flex-direction: row;
`;

export const IconG = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    cursor: pointer;
    float: right;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 25px;
    margin-bottom: 40px;
    margin-right: 548px;
`;

export const IconM = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    cursor: pointer;
    float: right;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 25px;
    margin-bottom: 40px;
`;

export const IconW = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    cursor: pointer;
    float: right;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 25px;
    margin-bottom: 40px;
`;

export const IconF = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    cursor: pointer;
    float: right;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px;
`;
