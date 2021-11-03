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

export const Header = styled.header`
    background-color: transparent;
    color: ${colors.basic.black};
    height: 10vh;
    border: solid 3px ${colors.basic.black};
`;

export const H1 = styled.h1`
    color: ${colors.basic.black};
    padding: 250px 300px 10px 400px;
`;

export const Button = styled.button`
    background-color: ${colors.basic.black};;
    display: flex;
    color: ${colors.basic.white};
    margin-left: 400px;
    margin-top: 10px;
    width: 100px;
    height: 45px;
    border: solid 2px ${colors.basic.black};
    border-radius: 15px;
    font-size: 15px;
    padding-left: 10px;
`;
