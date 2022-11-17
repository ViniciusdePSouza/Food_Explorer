import { Container, FavIcon, MinusIcon, PlusIcon } from './styles'

import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'
import  { useState, useEffect } from 'react'

import { Button } from '../../Components/Button'

import { api } from '../../services/api'

export function Card({ data, ...rest }) {
    const navigate = useNavigate()
    const [counter, setCounter] = useState(1)
    const [photo, setPhoto] = useState(1)

    function handleDetails() {
        navigate(`/details/${data.id}`)
    }

    function handleIncrease(){
        setCounter(counter + 1) 
    }
    function handleDecrease(){
        if(counter <= 1) {
            return 
        }
        setCounter(counter - 1)
    }
    
    async function fetchPhoto(photo) {
        const response = await api.get(`/files/${photo}`)
        return response
    }
    useEffect(() => {
        fetchPhoto(data.photo)
    }, [photo])

    return (
        <Container>
            <img src={photo} alt="" onClick={handleDetails}/>

            <FavIcon>
                <FiHeart/>
            </FavIcon>

            <h1>{data.name}</h1>

            <p>{data.description}</p>

            <h2>{data.price}</h2>

            <div>
                <MinusIcon onClick={handleDecrease}>
                    <FiMinus/>
                </MinusIcon>

                <span>{counter}</span>

                <PlusIcon onClick={handleIncrease}>
                    <FiPlus/>
                </PlusIcon>

                <Button loading={false} title="Incluir"/>
            </div>
        </Container>
    )
}