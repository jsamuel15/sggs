/* eslint-disable @typescript-eslint/no-explicit-any */
// libraries
import styled, { keyframes } from 'styled-components';

// js
import colors from '../../styles/colors';

// Interface
interface ColorTitleIcon {
    color: any,

}

interface BodyInterfaces {
    openScrollBar?: boolean,
}

interface backGrounColor {
    backGrounColor: any,
}

interface ContainerCardInterfaces {
    qtdSearch?: boolean,
}

// keyframes
const rotate = keyframes`
  from {
    padding-left: 100vw;
  }

  to {
    margin-left: 0vw;
  }

`;

// styles
export const Home = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${colors.basic.black};
    padding-top: 20px;
`;

export const Body = styled.div<BodyInterfaces>`
    min-width: 100vw;
    display: flex;
    margin-bottom: 20px;
    overflow-x: ${(props) => (props.openScrollBar ? 'auto' : 'hidden')};
    ::-webkit-scrollbar {
        height: 10px;
        border-radius: 10px;
        background-color: white;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${colors.basic.ligthBlack};
    }
`;

export const ContainerCard = styled.div<ContainerCardInterfaces>`
    padding: 14px;
    animation: ${rotate} 2s;
`;

export const DivInfoArea = styled.div`
    padding: 20px 8px;
    background-color: ${colors.basic.greyRGB};
    border-radius: 8px;
    min-width: 22vw;
    height: 14vh;
    cursor: pointer;

    @media(max-width: 580px) {
        width: 50vw;
    }
`;

export const DivAreaTotal = styled.div`

`;

export const DivArea = styled.div`
    max-width: 40vw;
    margin-bottom: 10px;

    /* media query */
    @media ( max-width: 1440px ) {
        width: 20vw;
    }
    @media ( max-width: 913px ) {
        width: 30vw;
    }
    @media ( max-width: 700px ) {
        width: 40vw;
    }
    @media ( max-width: 500px ) {
        width: 40vw;
    }

`;

export const TextAreaName = styled.div`
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${colors.basic.grey};

    /* media query */
    @media ( max-width: 1440px ) {
        font-size: 18px;
    }
    @media ( max-width: 500px ) {
        font-size: 16px;
    }
`;

export const TextPriceArea = styled.h1`
    font-size: 18px;
    color: ${colors.basic.white};

    /* media query */
    @media ( max-width: 580px ) {
        width: 100%;
        font-size: 16px;
    }
`;

export const ContainerDivArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const TextValorize = styled.text<ColorTitleIcon>`
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${(props) => (props.color === true ? `${colors.basic.green}` : `${colors.basic.red}`)};
`;

export const DivAreaValorize = styled.div`
    font-size: 18px;
    margin-bottom: 6px;
`;

export const DivItemPorcent = styled.div<backGrounColor>`
    background-color: ${(props) => (props.backGrounColor === true ? `${colors.basic.grenRGB}` : `${colors.basic.redRGB}`)};
    min-width: 60px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    font-size: 16px;
`;

export const ContainerPercentage = styled.div`
    display: flex;
    align-items: center;
    background-color: pink;
`;
