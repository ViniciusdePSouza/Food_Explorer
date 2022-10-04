import { Container, HeaderButton, Content } from './styles'

import leftArrow from '../../assets/leftarrow.svg'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { TableHeader } from '../../Components/TableHeader'
import { TableRowAdm } from '../../Components/TableRowAdm'

export function OrderAdm() {
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
                <TableRowAdm/>
                <TableRowAdm/>
                <TableRowAdm/>
                <TableRowAdm/>
            </main>
        </Content>

        <Footer/>

        </Container>
    )
}