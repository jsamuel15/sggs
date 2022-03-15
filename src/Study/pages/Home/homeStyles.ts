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

export const H2 = styled.h2`
color: ${colors.basic.black};
`;
