// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// styles
export const Container = styled.div`
    background-color: ${colors.basic.white};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
    align-items: center;
`;

export const Test = styled.text`
    color: ${colors.basic.black};
`;

export const Img = styled.img`
`;
