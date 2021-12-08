// libraries
import styled from 'styled-components';

// js
import colors from '../../../../styles/colors';

// styles
export const ContainerBox = styled.div`
    background-color: ${colors.basic.white};
    width: 150px;
    height: 150px;
    display: flex;
    margin-top: 20px;
    margin-left: 65px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px ${colors.basic.gray};
    align-items: center;
    justify-content: center;
`;

export const Label = styled.text`
    color: ${colors.theme.labelBoxContact};
`;
