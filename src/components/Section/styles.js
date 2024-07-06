import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.section`

  > h2 {

    padding-bottom: 16px;

    color: ${({ theme}) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`
export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`