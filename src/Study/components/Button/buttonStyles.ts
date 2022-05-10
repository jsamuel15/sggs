// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// styles

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: ${colors.theme.slateBlue};
    border-radius: 10px;
    opacity: 1;
    transition: all ease .3s;
    cursor: pointer;

    &:hover {
        opacity: .8s;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 15px;
`;

export const Icon = styled.img`
height: 20px;
`;

export const Label = styled.div`
    height: inherif;
    color: ${colors.basic.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 20px;
`;
