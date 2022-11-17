import { Container } from './styles'

import { DetailsBanner } from '../../Components/Details_Banner'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

import { api } from '../../services/api'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Details() {
    const params = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`)
            setData(response.data)
            console.log(data)
        }

        fetchDish()
    }, [])

    return (
        <Container>
            <Header />

            <DetailsBanner data={{
                    name: 'teste',
                    price: '21,50',
                    details: 'teste de detalhes',
                    photo: '59aeff4e8752f4d12586-Bolo%20de%20Damasco.png'
                }}
            />

            <Footer />
        </Container>
    )
}