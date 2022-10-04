import { Container } from './styles'

import parmaToast from '../../assets/dishes/parma-toast.png'

export function HorizontalCard() {
    return (
        <Container>
            <img src={parmaToast} alt="foto do prato" />

            <div>
                <h1>1 x  Salada Radish</h1>
                <button>Excluir</button>
            </div>

            <h4>R$ 25,97</h4>
        </Container>
    )
}