import { Container, Content, Section, ButtonWrapper, PaymentBox, Form, PaymentStatus } from './styles'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { HorizontalCard } from '../../Components/HorizontalCard'
import { InputAddDish } from '../../Components/InputAddDish'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { FiSearch } from 'react-icons/fi'

import pix from '../../assets/pix.svg'
import credit from '../../assets/credit.svg'
import qrcode from '../../assets/QRcode.svg'
import orderIcon from '../../assets/orderIcon.svg'
import checked from '../../assets/checked.svg'
import delivered from '../../assets/delivered.svg'
import clock from '../../assets/clock.svg'

import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/authContext'

import { api } from '../../services/api'

export function Payment() {

    const [orders, setOrder] = useState([])
    const [clientID, setClientID] = useState()
    const [pixStatus, setPixStatus] = useState(false)
    const [creditStatus, setCreditStatus] = useState(false)
    const [pixBtn, setPixBtn] = useState(false)
    const [creditBtn, setCreditBtn] = useState(false)

    let checkPixStatus = pixStatus ? 'hide' : null 
    let checkCreditStatus = creditStatus ? 'hide' : null

    let checkPixBtnStatus = pixBtn ? 'selected' : null 
    let checkCreditBtnStatus = creditBtn ? 'selected' : null

    function handleClick(){
        checkPixStatus = !checkPixStatus
        checkCreditStatus = !checkCreditStatus

        checkPixBtnStatus = !checkPixStatus
        checkCreditBtnStatus = !checkCreditStatus

        console.log(`valor Pix: ${checkPixStatus} |||| valor Crédito: ${checkCreditStatus}`)
        console.log(`valor BtnPix: ${checkPixBtnStatus} |||| valor BtnCrédito: ${checkCreditBtnStatus}`)
    }

    useEffect(() => {
        async function fetchOrders() {
            
            const response = await api.get(`/orders?user_id=${clientID}`)
            setOrder(response.data)
            console.log(orders)
        }

        fetchOrders()
    }, [clientID])

    return (
        <Container>
            <Header />

            <Content>
                <Section>
                    <h1>Meu Pedido</h1>
                    <div>
                 <Input icon={FiSearch} placeholder="Número do ID do cliente" type="number" onChange={e => setClientID(e.target.value)} />
                </div>
                <div>
                    {
                        orders.length > 0 && orders.map((order) => (
                            <HorizontalCard order={order} key={order.id} />
                        ))
                    }

                </div>

                <h2>Total: R$ 103,58</h2>
                </Section>
                <Section>
                    <h1>Pagamento</h1>
                    <ButtonWrapper>
                        <button id='fist-child' className='selected' onClick={handleClick}>
                            <img src={pix} alt="" />
                            PIX
                        </button>
                        <button onClick={handleClick} >
                            <img src={credit} alt="" />
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
                            <img src={clock} alt="" onClick={handleClick}/>
                            <h1>Esperando pagamento no caixa</h1>
                        </PaymentStatus>

                        <PaymentStatus className='hide'>
                            <img src={checked} alt="" />
                            <h1>Pagamento aprovado!</h1>
                        </PaymentStatus>

                        <PaymentStatus className='hide'  onClick={handleClick}>
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