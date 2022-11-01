import { Container, FavIcon, MinusIcon, PlusIcon } from './styles'

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import parmaToast from '../../assets/dishes/parma-toast.png'

import { useNavigate } from 'react-router-dom'

import { Button } from '../../Components/Button'

export function Card() {
    const navigate = useNavigate()

    function handleDetails() {
        navigate(`/details/:id`)
    }

    return (
        <Container onClick={handleDetails}>
            <img src={parmaToast} alt="" />

            <FavIcon>
                <FiHeart/>
            </FavIcon>

            <h1>Torrada de Parma</h1>

            <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>

            <h2>R$ 25,97</h2>

            <div>
                <MinusIcon>
                    <FiMinus/>
                </MinusIcon>

                <span>01</span>

                <PlusIcon>
                    <FiPlus/>
                </PlusIcon>

                <Button loading={false} title="Incluir" />
            </div>
        </Container>
    )
}