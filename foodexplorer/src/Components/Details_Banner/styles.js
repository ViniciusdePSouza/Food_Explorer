import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 0 13.1rem;

    grid-area: content;

    margin-bottom: 18rem;

    > header {
        padding: 2.4rem ;

        button {
            text-align: right;
            width: 100%;
        }
    }
`

export const Content = styled.div`
    width: 100%;
    
    display:flex;

    margin-top: 5rem;

    gap: 4rem;

    > img {
        width: 54rem;
        height: 54rem;
    }

    > div  {
        height: 100%;

        display: flex;
        flex-direction: column;

        margin-top: 6rem;

        h1, h3, h5 {
            font-family: 'Poppins', sans-serif;
            color: ${({ theme }) => theme.COLORS.WHITE}
        }

        h1 {
            font-weight: 500;
            font-size: 4rem;
        }

        h3 {
            font-weight: 400;
            font-size: 2rem;
            line-height: 140%;

            filter: brightness(0.8);

            margin-top: .8rem;
        }
    }
`

export const IngredientsWrapper = styled.div`
    display:flex;
    justify-content: right;

    gap: 0.8rem;

    margin-top: 2.5rem;
`
export const ButtonWrapper = styled.div`
    width: 100%;
    
    display:flex;
    align-items: center;
    gap: 2rem;

    margin-top: 6rem;

    > h2 {
        width: 130px;

        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 3.2rem;
        line-height: 160%;
    }

    > div {
        width: 50%;
    }
`

export const IngredientCard = styled.div`
    width: 100%;
    
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: .8rem;

    > img {
        width: 6rem;
        height: 6rem;
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

    &&:active {

        >svg {
            scale: 1.5;
        }
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

    &&:active {

        >svg {
            scale: 1.5;
        }
    }

`
export const HeaderButton = styled.button`
    width: 100%;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    justify-content: left;

    gap: 1.1rem;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 140%;

    >svg {
        color: #fff;
    }
`