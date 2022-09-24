import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10.8rem
`

export const Content = styled.div`

    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    >div {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

        gap: 2rem;

        > h1 {
            width: 100%;
            font-family: 'Roboto', sansserif;
            font-weight: 700;

            font-style: normal;
            font-weight: 700;
            font-size: 4.2rem;
            line-height: 5rem;

            text-align: center;
        }
    }
`

export const Form = styled.form`
    width: 40%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    padding: 6.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700};

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 2.4rem;
    }
`
