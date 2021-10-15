// libraries
import styled, { keyframes } from 'styled-components';

// js
import colors from '../styles/colors';

// interfaces
interface MenuInterface {
    visibleProfile?: boolean,
}

// keyframes
const rotate = keyframes`
  from {
    top: 100px;
  }
`;

// styles
export const Input = styled.input`
    color: ${colors.basic.white};
    background-color: ${colors.basic.ligthBlack};
    border: 1px solid ${colors.basic.white};
    height: 50px;
    padding-left: 5px;
    border-radius: 10px;
    min-width: 40%;

    @media(max-width: 580px){
        height: 40px;
        width: 100%;
    }
`;

export const DivInputArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media(max-width: 580px){
        padding: 10px;
    }
`;

export const Header = styled.div`
    align-items: center;
    display: flex;
    width: 100vw;
    justify-content: center;
`;

export const DivPhotoUser = styled.img<MenuInterface>`
    min-width: 5vw;
    height: 10vh;
    border-radius: 50%;
    border: 2px solid ${colors.basic.white};

    @media(max-width: 580px){
        cursor: pointer;
    }
`;

export const ContainerAreaUser = styled.div<MenuInterface>`
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;

    @media(max-width: 580px) {
        position: fixed;
        display: ${(props) => (props.visibleProfile ? 'flex' : 'none')};
        top: 120px;
        flex-flow: column nowrap;
        border-radius: 10px;
        background-color: ${colors.basic.white};
        animation: ${rotate} 0.2s;
    }
`;

export const DivNameUser = styled.div`
    min-width: 10%;
    margin-right: 20px;
    align-items: center;
    justify-content: flex-end;
    display: flex;

    @media(max-width: 580px) {
        min-width: 20%;
        margin-right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ContainerAreaInfo = styled.div`
    width: 30%;
    display: flex;
    margin-left: 10%;
    justify-content: flex-end;

    @media(max-width: 580px){
        margin-left: 0;
        padding-left: 2%;
    }
`;

export const ButtonExit = styled.div`
    cursor: pointer;
    color: ${colors.basic.ligthBlack};
    font-size: 16px;
    height: 20px;

    :hover {
        transition: linear 0.2s;
        color: ${colors.basic.white};
    }

    @media(max-width: 580px) {
        font-size: 12px;
        :hover {
            transition: linear 0.1s;
            color: ${colors.basic.ligthBlack};
        }
    }
`;

export const NameUser = styled.div`
    color: ${colors.basic.ligthBlack};
    font-size: 18px;
    margin-bottom: 4px;

    @media(max-width: 580px){
        font-size: 12px;
    }
`;

export const ButtonMyAccount = styled.div`
    cursor: pointer;
    color: ${colors.basic.ligthBlack};
    font-size: 16px;
    height: 20px;

    :hover {
        transition: linear 0.2s;
        color: ${colors.basic.white};
    }

    @media(max-width: 580px) {
        font-size: 12px;
        :hover {
            transition: linear 0.1s;
            color: ${colors.basic.ligthBlack};
        }
    }
`;
