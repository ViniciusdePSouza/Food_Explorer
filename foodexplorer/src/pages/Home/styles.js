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
`

export const Content = styled.div`
    width: 100%;
    grid-area: content;

    padding: 3rem 12.4rem;
`

export const Banner = styled.div`
    width: 100%;
    height: 26rem;

    display: flex;
    justify-content: space-between;

    margin-top: 13rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700};

    > div {
        position: absolute;

        img {
            position: relative;

            top: -150px;
            left: -50px;
        }
    }

    .banner-title{
        margin: 4rem 4rem ;

        display: flex;
        flex-direction: column;
        justify-content: end;
        text-align: right;
    }
`
