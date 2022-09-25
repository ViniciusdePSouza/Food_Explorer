import { Container, Content, Form } from './styles'
import logo from '../../assets/logo.svg'

import { FormInput } from '../../Components/FormInput'
import { Button } from '../../Components/Button'
import { TxtButton } from '../../Components/TxtButton'

export function SignUp() {
  return (
    <Container>

      <Content>
        <div>
          <img src={logo} alt="logo empresa" />
          <h1>food explorer</h1>
        </div>

        <Form>
          <h1>Crie sua conta</h1>

          <FormInput title='Nome' placeholder='Exemplo: João Maria da Silva' type='text'/>
          <FormInput title='Email' placeholder='Exemplo: exemplo@email.com.br' type='email'/>
          <FormInput title='Senha' placeholder='No mínimo 6 caracteres' type='password'/>

          <Button loading={false} title='Criar Conta'/>

          <TxtButton title='Já tenho uma conta'/>
        </Form>


      </Content>
      
    </Container>
  )
}