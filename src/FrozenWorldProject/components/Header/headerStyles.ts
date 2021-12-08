// libraries
import styled from 'styled-components';

// js
import colors from '../../styles/colors';

// interfaces
interface ButtonInterfaces {
    isFocus: boolean,
}

// styles
export const Button = styled.button<ButtonInterfaces>`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: ${colors.basic.white};
    cursor: pointer;
    width: 90px;
    height: 40px;
    border: ${(props) => (props.isFocus ? `2px solid ${colors.basic.white}` : 'none')};
    border-radius: 15px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    background-color: ${colors.basic.black};
    color: ${colors.basic.maroon};
    height: 70px;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
    flex-wrap: wrap;
`;
