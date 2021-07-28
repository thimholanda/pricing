import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import { FiLock, FiMail } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Background, Container, Content, Stripe, StyledForm } from './styles';
import Input from '../../components/Input';

import acqio from '../../assets/acqio.png';
import pricing from '../../assets/pricing-online.png';

export function SignIn() {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    const handleSubmit = useCallback(async () => {
        history.push('/dashboard');
    }, [history]);

    return (
        <Container>
            <Content>
                <h2>
                    <img src={acqio} alt="Acqio" />
                </h2>
                <Stripe>
                    <div />
                    <div />
                </Stripe>
                <h1>
                    <img src={pricing} alt="Acqio - Pricing Online" />
                </h1>
                <StyledForm ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input icon={FiMail} name="email" placeholder="email" />
                    <Input
                        icon={FiLock}
                        name="password"
                        type="password"
                        placeholder="password"
                    />

                    <Button type="submit">Entrar</Button>
                </StyledForm>
            </Content>
            <Background />
        </Container>
    );
}
