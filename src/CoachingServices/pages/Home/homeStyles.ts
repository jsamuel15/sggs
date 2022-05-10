// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

export const Container = styled.div`
    background-image: ${colors.basic.white};
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;
