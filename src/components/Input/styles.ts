import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: ${colors.gray_bg};
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    border: 2px solid ${colors.gray_bg};
    color: ${colors.gray_placeholder};
    transition: all 0.2s;

    & + div {
        margin-top: 8px;
    }

    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${props =>
        props.isFocused &&
        css`
            border-color: ${colors.yellow} !important;
            color: ${colors.yellow};
        `}

    ${props =>
        props.isFilled &&
        css`
            color: ${colors.yellow};
        `}

    input {
        flex: 1;
        border: 0;
        background: transparent;
        color: ${colors.gray_placeholder};
        &::placeholder {
        }
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }
    span {
        color: white;
        background-color: #c53030;
        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
