import { Container } from './styles'

export function TxtButton({ title, ...rest }) {
    return (
        <Container
        type='button'
        {...rest}>
            {title}
        </Container>
    )
}