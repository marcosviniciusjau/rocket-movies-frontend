import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  gap: 20px;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
  }

`

export const Content = styled.div`
  max-width: 750px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 12px;
  svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 24px;
      padding-top: 7px;
    }
    > :nth-child(1)
     {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 14px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`

export const Title = styled('div')`
  display: flex;
  gap: 12px;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  .image {
    display: flex;
    gap: 8px;
  }
  .image > img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .clock{
    font-size: 32px;
    padding-bottom: 10px;
  }
 

`
