import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;

  button {
    width: 100%;
  }

  @media (min-width: 380px) {
    flex-direction: row;

    .btnFull {
      width: 100%;
    }

    button {
      width: fit-content;
    }
  }
`
