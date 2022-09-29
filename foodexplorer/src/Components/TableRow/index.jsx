import { Container } from './styles'

export function TableRow() {
    return (
        <Container>

            <div id='first-child'>
                <div></div>
                <span>Pendente</span>
            </div>
            <div>
                <span>00000001</span>
            </div>
            <div >
                <span>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</span>
            </div>
            <div >
                <span>20/05 às 18h00</span>
            </div>
            
        </Container>
    )
}