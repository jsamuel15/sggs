// libraries
import styled from 'styled-components';

// JS
import colors from '../../styles/colors';

// styles
export const Container = styled.div`
    background-color: ${colors.basic.black};
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
`;

export const ContainerOver = styled.div`
    background-color: ${colors.basic.white};
`;

export const Containerfirst = styled.div`
    background-color: ${colors.basic.aqua};
`;

export const TextHard = styled.h2`
    color: ${colors.basic.white};
`;

export const Paragraph = styled.p`
    color: ${colors.basic.white};
`;

export const ParagraphHard = styled.p`
    color: ${colors.basic.white};
`;

export const Button = styled.button`
    color: ${colors.basic.white};
`;

export const ContainerSecond = styled.div`
    background-color: ${colors.basic.white};
`;

export const TextIzi = styled.h2`
    color: ${colors.basic.aqua};
`;

export const ParagraphIzi = styled.p`
    color: ${colors.basic.white};
`;

export const InputIzi = styled.input`
    background-color: ${colors.basic.gray};
`;

export const InputHard = styled.input`
    background-color: ${colors.basic.gray};
`;

export const ButtonIzi = styled.button`
    color: ${colors.basic.white};
`;

export const ContainerInner = styled.div`
    background-color: ${colors.basic.black};
`;
