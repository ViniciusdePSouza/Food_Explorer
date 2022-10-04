import { Container, Content, Section, ButtonWrapper, PaymentBox, Form, PaymentStatus } from './styles'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { HorizontalCard } from '../../Components/HorizontalCard'
import { InputAddDish } from '../../Components/InputAddDish'
import { Button } from '../../Components/Button'

import pix from '../../assets/pix.svg'
import credit from '../../assets/credit.svg'
import qrcode from '../../assets/QRcode.svg'
import orderIcon from '../../assets/orderIcon.svg'
import checked from '../../assets/checked.svg'
import delivered from '../../assets/delivered.svg'
import clock from '../../assets/clock.svg'

export function Payment() {
    return (
        <Container>
            <Header />

            <Content>
                <Section>
                    <h1>Meu Pedido</h1>
                    <div>
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                    </div>
                    <h2>Total: R$ 103,58</h2>
                </Section>
                <Section>
                    <h1>Pagamento</h1>
                    <ButtonWrapper>
                        <button id='fist-child'>
                            <img src={pix} alt="" />
                            PIX
                        </button>
                        <button className='selected'>
                            <img src={credit} alt="" className='selected' />
                            CRÉDITO
                        </button>
                    </ButtonWrapper>
                    <PaymentBox>
                        <img src={qrcode} alt="QR code na tela" className='hide' />

                        <Form className='hide'>

                            <label htmlFor="card-number">
                                Número do cartão
                                <InputAddDish id='card-number' />
                            </label>

                            <div>
                                <label htmlFor="valid-date">
                                    Validade

                                    <InputAddDish type='date' id='valid-date' />
                                </label>
                                <label htmlFor="cvc">
                                    CVC

                                    <InputAddDish id='cvc' />
                                </label>
                            </div>

                            <Button title='Finalizar pagamento' picture={orderIcon} />

                        </Form>

                        <PaymentStatus>
                            <img src={clock} alt="" />
                            <h1>Esperando pagamento no caixa</h1>
                        </PaymentStatus>

                        <PaymentStatus className='hide'>
                            <img src={checked} alt="" />
                            <h1>Pagamento aprovado!</h1>
                        </PaymentStatus>

                        <PaymentStatus className='hide'>
                            <img src={delivered} alt=""/>
                            <h1>Pedido entregue!</h1>
                        </PaymentStatus>
                    </PaymentBox>
                </Section>
                <Section></Section>

            </Content>

            <Footer />
        </Container>
    )
}