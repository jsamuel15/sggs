import styled from 'styled-components';
import colors from '../../styles/colors';

export const Home = styled.div`
    background-color: ${colors.basic.ligthBlack};
    border-radius: 6px;
    max-width: 70vw;
    height: 80vh;
    margin: 80px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 580px) {
        height: 70vh;
    }
`;

export const ItemName = styled.div`
    color: ${colors.basic.grey};
    font-size: 22px;
    margin: 6px;

    @media(max-width: 580px) {
        font-size: 18px;
    }
`;

export const ContainerItemName = styled.div`
    /* background-color: blue; */
    width: 100%;
    /* padding: 20px; */
`;

export const ContainerItens = styled.div`
    /* background-color: pink; */
    width: 80%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`;

export const ButtonChange = styled.button`
    background-color: ${colors.basic.grey};
    color: ${colors.basic.white};
    padding: 10px;
    height: 30px;
    max-width: 150px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;

    :hover {
        border: 1px solid ${colors.basic.white};
        background-color: ${colors.basic.greyRGB};
    }
`;

export const InputProfession = styled.input`
    padding: 2px;
    border: none;
    border-radius: 4px;
    width: 90%;width: 90%;
`;

export const InputEditUser = styled.input`
    padding: 2px;
    border: none;
    border-radius: 4px;
    width: 90%;
    height: 34px;
    font-size: 18px;
    color: ${colors.basic.ligthBlack};
`;

export const InputEditUserSelect = styled.input`
    padding: 2px;
    border: none;
    border-radius: 4px;
    width: 90%;
    height: 34px;
    font-size: 18px;
    color: ${colors.basic.ligthBlack};
`;
