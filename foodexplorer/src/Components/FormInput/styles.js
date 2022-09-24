import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;

    display: flex;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;

    > label {
        color: ${({ theme }) => theme.COLORS.GREY_TEXT};
        
        width: 100%;

        input {
            width: 100%;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700};
            
            border: none;

            outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};

            padding: 1.6rem
        }

    }

    
`