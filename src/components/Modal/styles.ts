import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Overlay = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    overflow-y: scroll;
    padding: 0 20px;

    div {
        width: 100%;
        max-width: 1336px;
        margin: 40px auto;
        height: auto;
        background: white;
        border-radius: 10px;
        padding: 60px 20px;
        position: relative;
    }
`;

export const ButtonClose = styled.button`
    width: 40px;
    height: 40px;
    background: ${colors.yellow};
    color: ${colors.green};
    position: absolute;
    right: 20px;
    top: 20px;
    border: 2px solid ${colors.green};
    border-radius: 50%;
    line-height: 45px;
`;
