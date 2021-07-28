import React, { useCallback, useRef, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import {
    Board,
    BoardContent,
    Container,
    Header,
    HeaderContent,
    Column,
    Profile,
    Stripe,
    StyledForm,
    Title,
    Row,
    ColumnContainer,
    ButtonFlagCard,
    ContainerButtonFlags,
    TitleFlags,
    TitleH3,
    Table,
    TitleH4,
    Hr,
} from './styles';

import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { colors } from '../../styles/colors';
import Select from '../../components/Select';

import pricing from '../../assets/pricing-online.png';
import user from '../../assets/eduardo-hoffmann.jpg';
import star from '../../assets/icon-star.png';
import mastercard from '../../assets/mastercard.svg';
import visa from '../../assets/visa.png';
import elo from '../../assets/elo.png';
import hipercard from '../../assets/hipercard.png';
import americanExpress from '../../assets/american-express.svg';
import { ButtonOutline } from '../../components/ButtonOutline';
import { Modal } from '../../components/Modal';

export function Dashboard() {
    const history = useHistory();
    const formRef = useRef<FormHandles>(null);
    const [cardActive, setCardActive] = useState('mastercard');
    const [isOpen, setIsOpen] = useState(false);
    const [priceNegotiationIsOpen, setPriceNegotiationIsOpen] = useState(false);

    const handleCardActive = useCallback((card: string) => {
        setCardActive(card);
    }, []);

    const handleSubmit = useCallback(async () => {
        history.push('/dashboard');
    }, [history]);

    const styles = {
        input: {
            background: 'white',
            border: `2px solid ${colors.gray_secondary_bg}`,
        },
    };
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={pricing} alt="Pricing Online" />
                    <Profile>
                        <img src={user} alt="Eduardo Hoffmann" />
                        <div>
                            <span>Bem-vindo,</span>
                            <strong>Eduardo Hoffman</strong>
                        </div>
                    </Profile>

                    <button
                        onClick={() => {
                            history.push('/');
                        }}
                        type="button"
                    >
                        <FiPower />
                    </button>
                </HeaderContent>
            </Header>
            <Stripe>
                <div />
                <div />
            </Stripe>
            <Board>
                <BoardContent>
                    <Title>
                        <h1>Nova cotação</h1>
                    </Title>
                    <Row>
                        <Column>
                            <StyledForm ref={formRef} onSubmit={handleSubmit}>
                                <h2>Perfil do cliente</h2>
                                <Input
                                    name="cnpj_cpf"
                                    type="text"
                                    placeholder="CNPJ ou CPF"
                                    containerstyle={styles.input}
                                />
                                <Input
                                    name="faturamento_total"
                                    type="text"
                                    placeholder="Faturamento total mensal"
                                    containerstyle={styles.input}
                                />
                                <Input
                                    name="faturamento_negociado"
                                    type="text"
                                    placeholder="Faturamento negociado mensal"
                                    containerstyle={styles.input}
                                />
                                <Input
                                    name="quantidade_terminais"
                                    type="number"
                                    placeholder="Quantidade de terminais"
                                    containerstyle={styles.input}
                                />
                                <Select
                                    options={[
                                        { value: 'parcela', label: 'Parcela' },
                                        {
                                            value: 'pro-rata',
                                            label: 'Pró-rata',
                                        },
                                        {
                                            value: 'sem-antecipacao',
                                            label: 'Sem antecipacao',
                                        },
                                    ]}
                                    name="modalidade"
                                />

                                <Button
                                    onClick={() =>
                                        setPriceNegotiationIsOpen(true)
                                    }
                                    type="submit"
                                >
                                    Calcular
                                </Button>
                            </StyledForm>
                        </Column>
                        {priceNegotiationIsOpen && (
                            <Column>
                                <h2>Negociação de preço</h2>
                                <ColumnContainer>
                                    <div>
                                        <TitleH3>
                                            Você está em um cliente
                                        </TitleH3>
                                        <img
                                            width="80"
                                            src={star}
                                            alt="Estrela"
                                        />
                                    </div>

                                    <div>
                                        <TitleFlags>
                                            Selecione a Bandeira
                                        </TitleFlags>
                                        <ContainerButtonFlags>
                                            <ButtonFlagCard
                                                isActive={
                                                    cardActive === 'mastercard'
                                                }
                                                onClick={() =>
                                                    handleCardActive(
                                                        'mastercard',
                                                    )
                                                }
                                                type="button"
                                            >
                                                <img
                                                    src={mastercard}
                                                    alt="Mastercard"
                                                />
                                            </ButtonFlagCard>
                                            <ButtonFlagCard
                                                isActive={cardActive === 'visa'}
                                                onClick={() =>
                                                    handleCardActive('visa')
                                                }
                                                type="button"
                                            >
                                                <img src={visa} alt="Visa" />
                                            </ButtonFlagCard>
                                            <ButtonFlagCard
                                                isActive={cardActive === 'elo'}
                                                onClick={() =>
                                                    handleCardActive('elo')
                                                }
                                                type="button"
                                            >
                                                <img src={elo} alt="Visa" />
                                            </ButtonFlagCard>
                                            <ButtonFlagCard
                                                isActive={
                                                    cardActive === 'hipercard'
                                                }
                                                onClick={() =>
                                                    handleCardActive(
                                                        'hipercard',
                                                    )
                                                }
                                                type="button"
                                            >
                                                <img
                                                    src={hipercard}
                                                    alt="Hipercard"
                                                />
                                            </ButtonFlagCard>
                                            <ButtonFlagCard
                                                isActive={
                                                    cardActive === 'american'
                                                }
                                                onClick={() =>
                                                    handleCardActive('american')
                                                }
                                                type="button"
                                            >
                                                <img
                                                    src={americanExpress}
                                                    alt="American Express"
                                                />
                                            </ButtonFlagCard>
                                        </ContainerButtonFlags>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <td />
                                                    <td>Máximo</td>
                                                    <td>Mínimo</td>
                                                    <td>Negociado</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="bold align-right">
                                                        Débito
                                                    </td>
                                                    <td>0,00%</td>
                                                    <td>0,00%</td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold align-right">
                                                        Crédito 1X
                                                    </td>
                                                    <td>0,00%</td>
                                                    <td>0,00%</td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold align-right">
                                                        Crédito 2 a 6
                                                    </td>
                                                    <td>0,00%</td>
                                                    <td>0,00%</td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold align-right">
                                                        Crédito 7 a 12
                                                    </td>
                                                    <td>0,00%</td>
                                                    <td>0,00%</td>
                                                    <td>0,00%</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>

                                    <ButtonOutline
                                        style={{ marginBottom: 40 }}
                                        type="button"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        Exibir Detalhamento
                                    </ButtonOutline>

                                    <Modal
                                        isOpen={isOpen}
                                        onClose={() => setIsOpen(false)}
                                    >
                                        <TitleH3
                                            style={{
                                                textAlign: 'center',
                                                color: colors.green,
                                                marginBottom: 40,
                                            }}
                                        >
                                            Detalhamento da negociação
                                        </TitleH3>
                                        <Table style={{ marginBottom: 40 }}>
                                            <tbody
                                                style={{ textAlign: 'center' }}
                                            >
                                                <tr>
                                                    <td className="bold">
                                                        Débito
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 1x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 2x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 3x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 4x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 5x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 6x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 7x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 8x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 9x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 10x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 11x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">
                                                        Créd. 12x
                                                    </td>
                                                    <td>0,00%</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Modal>

                                    <TitleH3>Estimativa dos Ganhos</TitleH3>
                                    <Table style={{ marginBottom: 40 }}>
                                        <thead>
                                            <tr>
                                                <td />
                                                <td>Máximo</td>
                                                <td>Mínimo</td>
                                                <td>Negociado</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="bold align-right">
                                                    Credenciamento
                                                </td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                            </tr>
                                            <tr>
                                                <td className="bold align-right">
                                                    Prêmio Ativação
                                                </td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                            </tr>
                                            <tr>
                                                <td className="bold align-right">
                                                    Total
                                                </td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                            </tr>
                                            <tr>
                                                <td className="bold align-right">
                                                    Recorrência
                                                </td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                            </tr>
                                            <tr>
                                                <td className="bold align-right">
                                                    Prêmio Recorrência
                                                </td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                            </tr>
                                            <tr>
                                                <td className="bold align-right">
                                                    Total
                                                </td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                                <td>0,00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Hr />
                                    <TitleH3>Estimativa dos Ganhos</TitleH3>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{ width: '40%' }}
                                                    className="bold align-right"
                                                >
                                                    Recorrência<sup>*</sup>
                                                </td>
                                                <td>R$ 0,00</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{ width: '40%' }}
                                                    className="bold align-right"
                                                >
                                                    Ativação<sup>*</sup>
                                                </td>
                                                <td>R$ 0,00</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div
                                        style={{
                                            marginBottom: 40,
                                            marginTop: 20,
                                        }}
                                    >
                                        <small>
                                            <sup>*</sup>
                                            <strong>Valores estimados</strong>
                                        </small>
                                        <small>
                                            Os valores reais irão variar para
                                            mais ou para menos de acordo com o
                                            comportamento performado pelo
                                            cliente.
                                        </small>
                                    </div>
                                    <Hr />
                                    <div>
                                        <TitleH4>
                                            Distribuição do faturamento
                                            negociado
                                        </TitleH4>
                                        <small style={{ marginBottom: 20 }}>
                                            utilizada para cálculo da estimativa
                                            de ganhos
                                        </small>
                                    </div>
                                    <Table style={{ marginBottom: 40 }}>
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{ width: '40%' }}
                                                    className="bold align-right"
                                                >
                                                    Débito
                                                </td>
                                                <td>--</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{ width: '40%' }}
                                                    className="bold align-right"
                                                >
                                                    Créd 1x
                                                </td>
                                                <td>R$ --</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{ width: '40%' }}
                                                    className="bold align-right"
                                                >
                                                    Créd 2 a 6
                                                </td>
                                                <td>R$ --</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{ width: '40%' }}
                                                    className="bold align-right"
                                                >
                                                    Créd 7 a 12
                                                </td>
                                                <td>R$ --</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Button type="button">
                                        Enviar Cotação
                                    </Button>
                                </ColumnContainer>
                            </Column>
                        )}
                    </Row>
                </BoardContent>
            </Board>
        </Container>
    );
}
