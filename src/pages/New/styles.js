import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_0};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .buttons {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    > :nth-child(1)
     {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_0};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
  
  .inputs {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: 38px auto;
  svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 24px;
      padding-top: 7px;
    }
    > :nth-child(1)
     {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    }


  }
`
