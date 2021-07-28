import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Container = styled.button`
    background: white;
    height: 56px;
    border-radius: 10px;
    border: 2px solid ${colors.green};
    padding: 0 16px;
    color: ${colors.green};
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: all 0.2s;

    &:hover {
        background: ${colors.green};
        color: white;
    }
`;

export default Container;
