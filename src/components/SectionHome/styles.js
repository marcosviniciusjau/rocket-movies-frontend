import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  h2{
    margin-left: -21px;
  }
`
export const NewNote = styled(Link)`
  width: 207px;
  height: 48px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  svg {
    margin-right: 8px;
  }
`