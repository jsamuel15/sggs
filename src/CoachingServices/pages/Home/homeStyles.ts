// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces
interface ContainerInner {
    background?: string,
}

export const Container = styled.div`
    background-image: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
    @media (width: 600px) {
        text-align: center;
    }
    @media (max-width: 300px) {
        display: none;
        text-align: center;
        justify-content: center;
    }
`;

export const ContainerInner = styled.div<ContainerInner>`
    background-image: ${(props) => (`url(${props.background})`)};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
    @media (width: 600px) {
        text-align: center;
    }
    @media (max-width: 300px) {
        display: none;
        text-align: center;
        justify-content: center;
    }
`;

export const Text = styled.h1`
    color: ${colors.basic.black};
    padding: 90px 300px 10px 300px;
    align-items: center;
    font-size: 70px;
    font-weight: bold;
    text-align: center;
    @media (max-width: 640px) {
        font-size: 35px;
    }
    @media (max-width: 470px) {
        font-size: 20px;
        padding: 45px 100px 5px 100px;
    }
`;

export const Texting = styled.h3`
    color: ${colors.basic.black};
    padding: 20px 300px 10px 250px;
    font-size: 20px;
    margin-top: 10px;
    align-items: center;
    text-align: center;
    margin-bottom: 190px;
    @media (max-width: 570px) {
        font-size: 13px;
        flex-direction: row;
        margim-bottom: 90px;
        padding: 45px 100px 5px 100px;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${colors.basic.black};
    border: solid 2px ${colors.basic.black};
    display: flex;
    cursor: pointer;
    max-width: 90px;
    max-height: 60px;
    border-radius: 20px;
    font-size: 12px;
    vertical-align: middle;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: 47%;
    margin-bottom: 10px;
`;

export const ContainerCube = styled.div`
    flex-direction: row;
    max-width: 1060px;
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
    // margin-bottom: 40px;
    margin-right: 250px;
    @media (max-width: 570px) {
        margin-right: 20px;
    }
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
    // margin-bottom: 40px;
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
    // margin-bottom: 40px;
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
    // margin-bottom: 40px;
    margin-left: 10px;
`;
