import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`
export const Brand = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Search = styled.div`
  grid-area: search;
  padding: 24px 24px 0;
  
  width: 630px;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 18px;
  .image {
    display: flex;
    
  gap: 18px;
    flex-direction: row-reverse;
  }
  .image > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  .user {
    display: flex;
    
    flex-direction: column;
    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    span {
      margin-left: 106px;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
    

`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`