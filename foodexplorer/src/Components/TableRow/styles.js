import styled from 'styled-components'

export const Container = styled.div`
    display: grid;

    width: 100%;

    grid-template-columns: 1fr 1fr 4fr 1fr;

    > div {
        display: flex;
        align-items: center;
        justify-content: left;

        border: 1px solid ${({ theme }) => theme.COLORS.GREY_TEXT};
        color: ${({ theme }) => theme.COLORS.GREY_TEXT};

        padding: 2rem;

        span {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 160%;
        }
    }

    #first-child{
        display: flex;
        align-items: center;
        justify-content: left;

        gap: .8rem;

        > div {
            width:8px;
            height: 8px;

            border-radius: 50%;

            background-color: ${({ theme }) => theme.COLORS.RED}
        }
    }

`