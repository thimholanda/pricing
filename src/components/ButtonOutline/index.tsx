import React, { ButtonHTMLAttributes } from 'react';
import Container from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    loading?: Boolean;
}

export function ButtonOutline({ children, loading, ...rest }: Props) {
    return (
        <Container type="button" {...rest}>
            {loading ? 'Carregando...' : children}
        </Container>
    );
}
