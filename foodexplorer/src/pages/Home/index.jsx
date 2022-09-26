import { Container, Content, Banner } from './styles'

import { FormInput } from '../../Components/FormInput'
import { Button } from '../../Components/Button'
import { Header } from '../../Components/Header'

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
          <div className="banner-title">
            <h1>Sabores inigualáveis</h1>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </Banner>
      </Content>

    </Container>
  )
}