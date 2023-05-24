import styled from 'styled-components'

export const LoginContainer = styled.section`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.grayThree};
  border-radius: 4px;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.sizeOne};
    color: ${({ theme }) => theme.colors.grayLight};
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.grayOne};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.sizeFour};
    text-align: center;
  }

  a {
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.grayLight};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.grayOne};
    font-size: ${({ theme }) => theme.fontSizes.sizeTwo};
    padding: 10px 20px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayTwo};
    }
  }
`
