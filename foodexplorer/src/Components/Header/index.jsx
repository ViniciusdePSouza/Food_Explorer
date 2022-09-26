import { Container, LogOut } from './styles'

import logo from '../../assets/logo.svg'
import orderIcon from '../../assets/orderIcon.svg'
import getBackIcon from '../../assets/getBackIcon.svg'

import { Button } from '../../Components/Button'

export function Header() {
    return (
        <Container>
            <div>
                <img src={logo} alt="logo empresa" />
                <h1>food explorer</h1>
            </div>

            <span>
                Vinícius de Paula
            </span>

            <div className="button-wrapper">
                <Button loading={false} title="Meu Pedido" picture={orderIcon}/>
            </div>

            <LogOut>
                <img src={getBackIcon} alt="" />
            </LogOut>

            

        </Container>
    )
}