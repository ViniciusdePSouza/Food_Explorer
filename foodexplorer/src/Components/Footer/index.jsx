import { Container } from './styles'

import logoFooter from '../../assets/logo_footer.svg'

export function Footer() {
    return (
        <Container>
            <div>
                <img src={logoFooter} alt="logo empresa" />
                <h1>food explorer</h1>
            </div>

            <span>© 2022 - Todos os direitos reservados.</span>
        </Container>
    )
}