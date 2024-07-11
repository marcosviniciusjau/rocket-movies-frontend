import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 4px;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  } 
   > p {
    flex: 1;
    text-align: left;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`