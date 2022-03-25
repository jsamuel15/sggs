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
    background-color: ${colors.basic.red};
    max-width: 900px;
    margin: 40px auto;
`;

export const Container = styled.div`
    display: flex;
    max-width: 900px;
    margin: auto;
`;

export const LeftSide = styled.div`
    background-color: ${colors.basic.red};
    margin-right: 40px;
    flex: 1;
`;

export const RigthSide = styled.div`
    background-color: ${colors.basic.blue};
    margin-left: 40px;
    flex: 1;
`;

// export const Button = styled.button`
//     background-color: ${colors.basic.white};
//     color: ${colors.basic.black};
// `;
