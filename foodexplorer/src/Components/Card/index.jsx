import { Container, FavIcon, MinusIcon, PlusIcon } from './styles'

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'
import  {useState, useEffect } from 'react'

import { Button } from '../../Components/Button'

export function Card({ data, ...rest }) {
    const navigate = useNavigate()

    // const [photo, setPhoto] = useState('')

    function handleDetails() {
        navigate(`/details/${data.id}`)
    }

    // useEffect(() => {
    //     const IMG = URL.createObjectURL(data.photo)
    //     console.log(IMG)
    //   }, [])

    return (
        <Container onClick={handleDetails}>
            <img src={data.photo} alt="" />

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