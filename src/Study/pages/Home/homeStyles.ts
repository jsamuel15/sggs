// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// styles
export const ContainerMain = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.header`
    background-color: ${colors.basic.white};
`;

export const Img = styled.img`
    width: 150px;
`;

export const Box = styled.div`
    background-color: ${colors.basic.white};
    max-width: 900px;
    margin: 40px auto;
`;

export const Container = styled.div`
    display: flex;
    max-width: 900px;
    margin: auto;
`;

export const LeftSide = styled.div`
    background-color: ${colors.basic.white};
    margin-right: 40px;
    flex: 1;
`;

export const H1 = styled.h1`
    margin: 0;
    font-size: 40px;
    color:  ${colors.theme.grayDark};
`;

export const PhraseOne = styled.p`
    font-size: 16px;
    margin-bottom: 40px;
    color: ${colors.theme.graySlate};
`;

export const InputLeft = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid ${colors.theme.grayState};
    padding: 10px 2px;
    margin-bottom: 20px;
    font-size: 14px;
    outline: none;
`;

export const Button = styled.button`
    background-color: ${colors.theme.blueSlate};
    color: ${colors.basic.white};
    font-size: 15px;
    border: none;
    border-radius: 10px;
    padding: 15px 0;
    width: 100%;
    cursor: pointer;
    margin-top: 40px;
    transition: all ease .3s;
`;

export const RigthSide = styled.div`
    background-color: ${colors.basic.blue};
    margin-left: 40px;
    flex: 1;
`;
