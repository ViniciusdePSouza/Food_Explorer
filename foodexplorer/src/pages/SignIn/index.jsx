import { Container, Content, Form } from './styles'
import logo from '../../assets/logo.svg'

import { FormInput } from '../../Components/FormInput'

export function SignIn() {

  return (
    <Container>

      <Content>
        <div>
          <img src={logo} alt="logo empresa" />
          <h1>food explorer</h1>
        </div>

        <Form>
          <h1>Faça Login</h1>

          <FormInput title='Email' placeholder='Insira seu email' type='email'/>
          <FormInput title='Senha' placeholder='Insira sua senha' type='password'/>
        </Form>

      </Content>
      
    </Container>
  )
}


