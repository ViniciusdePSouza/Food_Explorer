import { Container } from './styles'

import downArrow from '../../assets/downArrow.svg'

export function TableRowAdm() {
    return (
        <Container>

            <div id='first-child'>
                <div className='select-box'>
                    <select name="option" id="option">
                        <option value="">Selecione</option>
                        <option value="1">Pendente</option>
                        <option value="2">Preparando</option>
                        <option value="3">Entregue</option>
                    </select>
                    <img src={downArrow} alt="" />
                </div>
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