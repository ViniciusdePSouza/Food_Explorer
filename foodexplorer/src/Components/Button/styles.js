import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    margin-top: 1rem;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background-color: ${({ theme }) => theme.COLORS.RED};

    border: none;
    outline: none;

    padding: 1.6rem 0;

    border-radius: 5px;
`