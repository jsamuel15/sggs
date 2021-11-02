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
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;

export const H1 = styled.h1`
    color: ${colors.basic.black};
    padding: 0px 0px 50px 0px;
`;
