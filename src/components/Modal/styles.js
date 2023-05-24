import styled from 'styled-components'

export const ModalHeader = styled.div`
  width: 100%;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.grayTwo};
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayLight};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.sizeTwo};
  }

  button {
    cursor: pointer;
  }
`

export const ModalBody = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayLight};
  gap: 20px;

  fieldset {
    width: 100%;
  }

  button {
    width: 100%;
  }

  span {
    color: ${({ theme }) => theme.colors.grayOne};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.sizeFour};
    text-align: center;
  }
`
