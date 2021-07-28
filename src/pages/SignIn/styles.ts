import styled from 'styled-components';
import { Form } from '@unform/web';

import signInImageBackground from '../../assets/bg-singin.jpg';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    width: 100%;
    align-items: stretch;
    background-color: gray;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    background-color: white;
    padding: 3%;

    h1 {
        margin-bottom: 20%;

        img {
            display: block;
            width: 100%;
            max-width: 300px;
        }
    }

    h2 {
        img {
            display: block;
            max-width: 119px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInImageBackground}) no-repeat center;
    background-size: cover;
`;

export const StyledForm = styled(Form)`
    width: 100%;
    text-align: center;

    h1 {
        font-size: 1.8rem;
        color: ${colors.gray_text};
        font-weight: 400;
        margin-bottom: 20px;
    }
`;

export const Stripe = styled.div`
    width: 50%;
    height: 6px;
    background-color: ${colors.yellow};
    align-self: left;
    position: relative;
    display: flex;
    margin: 20% 0;

    div {
        width: 33%;
        height: 100%;
        background-color: ${colors.green_secondary};

        &:first-child {
            background-color: ${colors.green};
        }
    }
`;
