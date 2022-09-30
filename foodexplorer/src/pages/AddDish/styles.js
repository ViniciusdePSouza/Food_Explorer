import styled from 'styled-components'

export const Container = styled.div`
    display: grid;

    grid-template-rows: 
    12.4rem,
    auto, 
    12.4rem;
    grid-template-areas:
    'header'
    'content'
    'footer';

    min-height: 100vh
`
export const Content = styled.div`
    grid-area: content;

    padding: 2.5rem 12rem 12.5rem;
`

export const Form = styled.form`

    > div {
        display:flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;

        margin-bottom:3.2rem;
    }
`

export const HeaderButton = styled.button`
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

export const ShorterInput = styled.div`
    width: 35%;

    display: flex;
    flex-direction: column;
    align-items: left;

    color: ${({ theme }) => theme.COLORS.WHITE}; 
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    label { 
        opacity: 0.65;

        margin-bottom: 1.5rem;
    }
`
export const BiggerInput = styled.div`
    width: 65%;

    display: flex;
    flex-direction: column;
    align-items: left;

    color: ${({ theme }) => theme.COLORS.WHITE}; 
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    > div  {
        background-color: transparent;
    }

    label { 
        opacity: 0.65;

        margin-bottom: 1.5rem;
    }
`