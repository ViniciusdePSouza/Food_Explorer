import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GREY_TEXT};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GREY_TEXT}` : "none"};
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 0 16px;
    > button { 
        border: none;
        background: none;
    }
    .button-delete {
        color: ${({ theme }) => theme.COLORS.GREY_TEXT};
    }
    .button-add {
        color: ${({ theme }) => theme.COLORS.GREY_TEXT};
    }
    > input { 
        width: 100%;
        height: 56px;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        
        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GREY_TEXT};
        }
    }
`