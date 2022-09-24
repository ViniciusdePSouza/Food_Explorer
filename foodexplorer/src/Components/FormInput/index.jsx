import { Container } from './styles'

export function FormInput({ title, ...rest }) {
    return (
        <Container>
            <label htmlFor={title}>
                <input {...rest} />
            </label>

        </Container>
    )
}