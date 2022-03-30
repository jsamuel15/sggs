// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// styles
export const Inside = styled.div`
    display: flex;
    color: ${colors.basic.white};
    border-radius: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;

export const DivIcon = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 30;
`;

export const DivTitle = styled.div`
    font-size: 23px;
    font-weight: bold;
    margin-top: 5px;
`;

export const DivInfo = styled.div`
    font-size: 12px;
    margin-top: 14px;
`;
