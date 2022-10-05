import { Container, HeaderButton, Content } from './styles'

import leftArrow from '../../assets/leftarrow.svg'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { TableHeader } from '../../Components/TableHeader'
import { TableRow } from '../../Components/TableRow'

import { useNavigate } from 'react-router-dom'

export function OrderList() {
    const navigate = useNavigate()

    function handleBack() {
      navigate((-1))
    }

    return (
        <Container>
            <Header/>
        <Content>
            <header>
                <h1>Pedidos</h1>

                <HeaderButton onClick={handleBack}>
                    <img src={leftArrow} alt="Voltar" />
                    voltar
                </HeaderButton>
            </header>

            <main>
                <TableHeader/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
            </main>
        </Content>

        <Footer/>

        </Container>
    )
}