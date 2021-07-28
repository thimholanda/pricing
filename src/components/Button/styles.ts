import styled from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles/colors';

const Container = styled.button`
    background: ${colors.yellow};
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: ${colors.green};
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, colors.yellow)};
    }
`;

export default Container;
