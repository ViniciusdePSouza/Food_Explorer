import { Container, Content, Banner } from './styles'

import { FormInput } from '../../Components/FormInput'
import { Button } from '../../Components/Button'
import { Header } from '../../Components/Header'
import { Card } from '../../Components/Card'

import { FiSearch } from 'react-icons/fi'

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
          <Input icon={FiSearch} placeholder="Nome do prato" type="text" />
        </div>
        <h1>Pratos Principais</h1>

        <section id='main-dishes'>
         <Card/>
        </section>
      </Content>

    </Container>
  )
}