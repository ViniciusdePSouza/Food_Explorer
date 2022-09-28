import { Container, Content, Banner } from './styles'

import { FormInput } from '../../Components/FormInput'
import { Button } from '../../Components/Button'
import { Header } from '../../Components/Header'
import { Card } from '../../Components/Card'
import { Footer } from '../../Components/Footer'

import 'react-multi-carousel/lib/styles.css';

import { FiSearch } from 'react-icons/fi'

import Carousel from 'better-react-carousel'

import { Input } from '../../Components/Input'

import banner from '../../assets/banner.svg'

export function Home() {
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
          <Input icon={FiSearch} placeholder="Pesquisar prato nos favoritos" type="text" />
        </div>

        <h1>Pratos Principais</h1>
        
        <Carousel cols={3} rows={1} loop={true} gap={0}>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
        </Carousel>

        <h1>Sobremesas</h1>

        <Carousel cols={3} rows={1} loop={true} gap={0}>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
        </Carousel>

        <h1>Bebidas</h1>

        <Carousel cols={3} rows={1} loop={true} gap={0}>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
        </Carousel>
      </Content>

      <Footer />

    </Container>
  )
}