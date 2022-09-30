import { Container, HeaderButton, Content } from './styles'

import leftArrow from '../../assets/leftarrow.svg'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { TableHeader } from '../../Components/TableHeader'
import { TableRow } from '../../Components/TableRow'

export function OrderList() {
    return (
        <Container>
            <Header/>
        <Content>
            <header>
                <h1>Pedidos</h1>

                <HeaderButton>
                    <img src={leftArrow} alt="" />
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