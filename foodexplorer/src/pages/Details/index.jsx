import { Container } from './styles'

import { DetailsBanner } from '../../Components/Details_Banner'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

export function Details() {
    return (
        <Container>
            <Header/>

            <DetailsBanner/>

            <Footer/>
        </Container>
    )
}