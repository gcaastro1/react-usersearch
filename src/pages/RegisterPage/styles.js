import styled from 'styled-components'

export const RegisterContainer = styled.section`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.grayThree};
  border-radius: 4px;
  margin-bottom: 40px;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.sizeOne};
    color: ${({ theme }) => theme.colors.grayLight};
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.grayOne};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.sizeFour};
    text-align: center;
  }
`

export const RegisterHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  a {
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.grayLight};
    font-weight: 500;
    line-height: 150%;
    padding: 10px 16px;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.grayThree};
    font-size: ${({ theme }) => theme.fontSizes.sizeThree};

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayTwo};
    }
  }
`
