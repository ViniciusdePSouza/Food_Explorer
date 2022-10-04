import { Container, Content, Form } from './styles'
import logo from '../../assets/logo.svg'

import { useNavigate } from 'react-router-dom'

import { FormInput } from '../../Components/FormInput'
import { Button } from '../../Components/Button'
import { TxtButton } from '../../Components/TxtButton'

export function SignIn() {
  const navigate = useNavigate()

  function handleRegister() {
    navigate(`/register`)
  }

  return (
    <Container>

      <Content>
        <div>
          <img src={logo} alt="logo empresa" />
          <h1>food explorer</h1>
        </div>

        <Form>
          <h1>Faça Login</h1>

          <FormInput title='Email' placeholder='Exemplo: exemplo@email.com.br' type='email'/>
          <FormInput title='Senha' placeholder='No mínimo 6 caracteres' type='password'/>

          <Button loading={false} title='Entrar'/>

          <TxtButton title='Criar conta' onClick={handleRegister}/>
        </Form>


      </Content>
      
    </Container>
  )
}


