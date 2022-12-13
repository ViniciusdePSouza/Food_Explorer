import { Container, HeaderButton, Content } from './styles'

import leftArrow from '../../assets/leftarrow.svg'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { TableHeader } from '../../Components/TableHeader'
import { TableRowAdm } from '../../Components/TableRowAdm'
import { Input } from '../../Components/Input'
import { FiSearch } from 'react-icons/fi'


import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/authContext'

import { api } from '../../services/api'

export function OrderAdm() {
    const navigate = useNavigate()

    const { user } = useAuth()

    const [orders, setOrder] = useState([])
    const [clientID, setClientID] = useState()

    function handleBack() {
        navigate((-1))
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
            <Header/>
        <Content>
            <header>
                <h1>Pedidos</h1>

                <div>
                 <Input icon={FiSearch} placeholder="Número do ID do cliente" type="number" onChange={e => setClientID(e.target.value)} />
                </div>

                <HeaderButton onClick={handleBack}>
                    <img src={leftArrow} alt="" />
                    voltar
                </HeaderButton>
            </header>

            <main>
                    <TableHeader />
                    {
                        orders.length > 0 && orders.map((order) => (
                            <TableRowAdm order={order} key={order.id}/>
                        ))
                    }

                </main>
        </Content>

        <Footer/>

        </Container>
    )
}