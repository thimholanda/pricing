// import { shade } from 'polished';
import styled from 'styled-components';
import { Form } from '@unform/web';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100vh;
`;

export const Header = styled.header`
    padding: 30px 40px;
    background: #ffffff;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    > img {
        height: 70px;
    }

    button {
        margin-left: auto;
        background: transparent;
        border: 0;

        svg {
            color: #999591;
            height: 20px;
            width: 20px;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;

    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid ${colors.yellow};
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            color: ${colors.gray_text};
        }

        strong {
            color: ${colors.green};
            font-weight: normal;
        }
    }
`;

export const Stripe = styled.div`
    width: 100%;
    height: 4px;
    background-color: ${colors.yellow};
    align-self: left;
    position: relative;
    display: flex;

    div {
        width: 33%;
        height: 100%;
        background-color: ${colors.green_secondary};

        &:first-child {
            background-color: ${colors.green};
        }
    }
`;

export const Board = styled.div`
    flex: 1;
    padding: 40px 0;
    background-color: ${colors.gray_bg};
`;

export const BoardContent = styled.div`
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
`;

export const StyledForm = styled(Form)`
    width: 100%;

    h2 {
        text-align: left;
        color: ${colors.green};
        font-size: 1.4rem;
        margin-bottom: 10px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    h2 {
        text-align: left;
        color: ${colors.green};
        font-size: 1.2rem;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: 900;
    }
`;

export const Title = styled.div`
    width: 100%;
    h1 {
        font-size: 1.8rem;
        color: ${colors.gray_text};
        font-weight: 400;
        margin-bottom: 40px;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Star = styled.div``;

export const ColumnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    border: 2px solid ${colors.gray_secondary_bg};

    small {
        display: block;
        color: ${colors.gray_placeholder};
    }
`;

export const ContainerButtonFlags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
`;

interface ButtonFlagCardProps {
    isActive?: Boolean;
}

export const ButtonFlagCard = styled.button<ButtonFlagCardProps>`
    height: 40px;
    background: transparent;
    width: 80px;
    border: 2px solid
        ${props => (props.isActive ? colors.yellow : colors.gray_secondary_bg)};
    border-radius: 10px;
    padding: 5px 0;

    img {
        height: 100%;
    }
`;

export const TitleFlags = styled.h4`
    color: ${colors.green};
    margin: 20px 0 20px 0;
`;

export const TitleH3 = styled.h3`
    color: ${colors.gray_placeholder} !important;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const TitleH4 = styled.h4`
    color: ${colors.gray_placeholder} !important;
    font-weight: bold;
    margin-bottom: 2px;
`;

export const Table = styled.table`
    width: 100%;
    color: ${colors.gray_placeholder};
    text-align: left;
    border-collapse: collapse;

    thead {
        font-weight: bold;
    }

    .bold {
        font-weight: 900;
    }

    .align-right {
        text-align: right;
    }

    tr + tr {
        border-top: 1px solid ${colors.gray_secondary_bg};
    }

    td {
        padding: 8px 10px;
    }
`;

export const Hr = styled.hr`
    border-top: 4px solid ${colors.gray_secondary_bg};
    margin-bottom: 40px;
`;
