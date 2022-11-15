import { Container, Content, Banner } from './styles'

import { Header } from '../../Components/Header'
import { Card } from '../../Components/Card'
import { Footer } from '../../Components/Footer'

import 'react-multi-carousel/lib/styles.css';

import { FiSearch } from 'react-icons/fi'

import Carousel from 'better-react-carousel'

import { Input } from '../../Components/Input'

import banner from '../../assets/banner.svg'

import { useState, useEffect} from 'react'

import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState('')
  const [mainDishes, setMainDishes] = useState([])

  useEffect(() => {
    async function fetchMainDishes() {
      const response  = await api.get(`/getters/main`)
      setMainDishes(response)
    }

    fetchMainDishes()

    console.log(mainDishes)
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <Banner>
          <div>
            <img src={banner} alt="" />
          </div>

          <div className="banner">
            <h1>Sabores inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </div>
        </Banner>

        <div className="div-input">
          <Input icon={FiSearch} placeholder="Pesquisar prato nos favoritos" type="text" onChange={e => setSearchValue(e.target.value)}/>
        </div>

        <h1>Pratos Principais</h1>
        
        <Carousel cols={4} rows={1} loop={true} gap={0}>
          <Carousel.Item>
          {
            <Card data={{
              name: 'teste',
              price:'22,50',
              description: 'teste de descrição',
              id:5
            }}/>
          }
          </Carousel.Item>

        </Carousel>

        <h1>Sobremesas</h1>

        <Carousel cols={4} rows={1} loop={true} gap={0}>
          <Carousel.Item>
          <Card data={{
              name: 'teste',
              price:'22,50',
              description: 'teste de descrição',
              id:5
            }}/>
          </Carousel.Item>

        </Carousel>

        <h1>Bebidas</h1>

        <Carousel cols={4} rows={1} loop={true} gap={0}>
          <Carousel.Item>
            <Card data={{
              name: 'teste',
              price:'22,50',
              description: 'teste de descrição',
              id:5
            }}/>
          </Carousel.Item>

        </Carousel>
      </Content>

      <Footer />

    </Container>
  )
}