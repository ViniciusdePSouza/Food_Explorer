import { Container, LogOut } from './styles'

import logo from '../../assets/logo.svg'
import orderIcon from '../../assets/orderIcon.svg'
import logout from '../../assets/logout.svg'

import { Button } from '../../Components/Button'

import plusIcon from '../../assets/plus.svg'

import { useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate()

    function handleAddDish() {
      navigate(`/add`)
    }

    function handleOrders() {
        navigate('/orders')
    }

    return (
        <Container>
            <div>
                <img src={logo} alt="logo empresa" />
                <h1>food explorer</h1>
            </div>
            <Button loading={false} title="Adicionar Prato" picture={plusIcon} onClick={handleAddDish}/>
            <div className="button-wrapper">
                <Button loading={false} title="Meu Pedido" picture={orderIcon}  onClick={handleOrders}/>
            </div>

            <LogOut>
                <img src={logout} alt="" />
            </LogOut>
        </Container>
    )
}