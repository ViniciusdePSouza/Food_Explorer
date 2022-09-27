import styled from 'styled-components'

export const Container = styled.div`

    width: 30rem;
    height: 50rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 4rem;

    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_900};

    position: relative;

    gap: .8rem;

    >img {
        width: 24rem;
        height: 24rem;
    }

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size:2rem;
        line-height:3.3rem;

        color: ${({ theme }) => theme.COLORS.WHITE};

        text-align: center;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:1.4rem;
        line-height:2.2rem;

        text-align: center;

        opacity: 0.75
    }

    >h2 {

        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:3.2rem;
        line-height:160%;

        text-align: center;

    }

    > span {
        color: ${({ theme }) => theme.COLORS.WHITE};

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size:2rem;
        line-height:3.2rem;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        gap: 2rem;
    }
    
`

export const FavIcon = styled.button`
    width: 40px;
    height: 40px;

    background: none;
    border: none;

    position: absolute;

    top: 0;
    right: 0;

    >svg {
        color: #fff;
        font-size: 2rem;
    }

`
export const MinusIcon = styled.button`
    width: 20px;
    height: 20px;

    background: none;
    border: none;

    >svg {
        color: #fff;
    }

`
export const PlusIcon = styled.button`
    width: 20px;
    height: 20px;

    background: none;
    border: none;

    >svg {
        color: #fff;
    }

`