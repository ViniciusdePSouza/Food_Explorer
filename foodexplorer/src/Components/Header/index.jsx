import { Container, LogOut } from './styles'

import logo from '../../assets/logo.svg'
import orderIcon from '../../assets/orderIcon.svg'
import logout from '../../assets/logout.svg'

import { Button } from '../../Components/Button'

export function Header() {
    return (
        <Container>
            <div>
                <img src={logo} alt="logo empresa" />
                <h1>food explorer</h1>
            </div>
            <div className="button-wrapper">
                <Button loading={false} title="Meu Pedido" picture={orderIcon}/>
            </div>

            <LogOut>
                <img src={logout} alt="" />
            </LogOut>
        </Container>
    )
}