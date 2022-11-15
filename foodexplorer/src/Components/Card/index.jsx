import { Container, FavIcon, MinusIcon, PlusIcon } from './styles'

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import parmaToast from '../../assets/dishes/parma-toast.png'

import { useNavigate } from 'react-router-dom'

import { Button } from '../../Components/Button'

export function Card({ data, ...rest }) {
    const navigate = useNavigate()

    function handleDetails() {
        navigate(`/details/${data.id}`)
    }

    return (
        <Container onClick={handleDetails}>
            <img src={parmaToast} alt="" />

            <FavIcon>
                <FiHeart/>
            </FavIcon>

            <h1>{data.name}</h1>

            <p>{data.description}</p>

            <h2>{data.price}</h2>

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