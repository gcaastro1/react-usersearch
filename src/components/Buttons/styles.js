import styled, { css } from 'styled-components'

export const Button = styled.button`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.grayLight};
  font-weight: 500;
  padding: 8px 20px;
  transition: 0.3s;

  ${(props) => {
    switch (props.btnType) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.colors.primary};
          padding: 10px 20px;
          font-size: ${({ theme }) => theme.fontSizes.sizeTwo};

          &:hover {
            background-color: ${({ theme }) => theme.colors.primaryFocus};
          }
        `
      case 'grayLight':
        return css`
          background-color: ${({ theme }) => theme.colors.grayOne};
          font-size: ${({ theme }) => theme.fontSizes.sizeTwo};
          padding: 10px 20px;

          &:hover {
            background-color: ${({ theme }) => theme.colors.grayTwo};
          }
        `

      case 'gray':
        return css`
          background-color: ${({ theme }) => theme.colors.grayThree};
          font-size: ${({ theme }) => theme.fontSizes.sizeFour};
          height: 32px;

          &:hover {
            background-color: ${({ theme }) => theme.colors.grayTwo};
          }
        `

      case 'grayIcon':
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${({ theme }) => theme.colors.grayThree};
          font-size: ${({ theme }) => theme.fontSizes.sizeThree};
          padding: 0;
          width: 32px;
          height: 32px;

          &:hover {
            background-color: ${({ theme }) => theme.colors.grayTwo};
          }
        `
      case 'lightIcon':
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          font-size: ${({ theme }) => theme.fontSizes.sizeOne};
          color: ${({ theme }) => theme.colors.grayOne};
          padding: 0;
        `
    }
  }}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayOne};
    &:hover {
      background-color: ${({ theme }) => theme.colors.grayTwo};
    }
  }
`
