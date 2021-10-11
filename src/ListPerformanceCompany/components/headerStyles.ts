// libraries
import styled from 'styled-components';

// js
import colors from '../styles/colors';

export const Input = styled.input`
    color: ${colors.basic.white};
    background-color: ${colors.basic.ligthBlack};
    border: 1px solid ${colors.basic.white};
    height: 50px;
    padding-left: 5px;
    border-radius: 10px;
    width: 30%;
`;

export const Header = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;
