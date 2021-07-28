import styled from 'styled-components';
import Tooltip from '../Tooltip';

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
