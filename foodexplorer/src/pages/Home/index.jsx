import { Container, Content, Banner } from './styles'

import { Header } from '../../Components/Header'
import { Card } from '../../Components/Card'
import { Footer } from '../../Components/Footer'

import 'react-multi-carousel/lib/styles.css';

import { FiSearch } from 'react-icons/fi'

import Carousel from 'better-react-carousel'

import { Input } from '../../Components/Input'

import banner from '../../assets/banner.svg'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState('')
  const [mainDishes, setMainDishes] = useState([])
  const [drinks, setDrinks] = useState([])
  const [desserts, setDesserts] = useState([])

  useEffect(() => {
    async function fetchMainDishes() {
      const response = await api.get(`/getters/main`)
      setMainDishes(response.data)
    }
    async function fetchDrinks() {
      const response = await api.get(`/getters/drink`)
      setDrinks(response.data)
    }
    async function fetchDesserts() {
      const response = await api.get(`/getters/dessert`)
      setDesserts(response.data)
    }

    fetchMainDishes()
    fetchDesserts()
    fetchDrinks()

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
          <Input icon={FiSearch} placeholder="Pesquisar prato nos favoritos" type="text" onChange={e => setSearchValue(e.target.value)} />
        </div>

        <h1>Pratos Principais</h1>

        <Carousel cols={3} rows={1} loop={true} gap={0}>
          {
            mainDishes.map(dish => (
              <Carousel.Item key={dish.id}>
                <Card data={dish}/>
              </Carousel.Item>
            ))
          }
        </Carousel>

        <h1>Sobremesas</h1>

        <Carousel cols={3} rows={1} loop={true} gap={0}>
          {
            desserts.map(dessert => (
              <Carousel.Item key={dessert.id}>
                <Card data={dessert}/>
              </Carousel.Item>
            ))
          }
        </Carousel>

        <h1>Bebidas</h1>

        <Carousel cols={3} rows={1} loop={true} gap={0}>
          {
            drinks.map(drink => (
              <Carousel.Item key={drink.id}>
                <Card data={drink}/>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Content>

      <Footer />

    </Container>
  )
}