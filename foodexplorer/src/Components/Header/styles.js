import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 3.5rem  ;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKBLUE_700};

    grid-area: header;

    > div {
        display: flex;
        gap: 1rem;
    }

    .button-wrapper{
        width: 15%;

        margin-left: 50rem;
    }

    grid-area: header;
`

export const LogOut = styled.button`
    width: 20px;

    background: none;
    border: none;

`