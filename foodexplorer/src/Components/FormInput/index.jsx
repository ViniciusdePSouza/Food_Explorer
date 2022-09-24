import { Container } from './styles'

export function FormInput({ props, ...rest }) {
    return (
        <Container>
            <label htmlFor={props.title}>
                <input {...rest} />
            </label>

        </Container>
    )
}