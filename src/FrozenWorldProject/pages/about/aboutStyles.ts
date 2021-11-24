/* eslint-disable @typescript-eslint/no-unused-vars */
// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces

interface Container {
    background: string,
}

export const Container = styled.div`
    background-color: ${colors.basic.black};
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
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
    padding: 90px 300px 10px 300px;
    align-items: center;
    font-size: 70px;
    text-align: center;
`;
