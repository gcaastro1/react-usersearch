import styled from 'styled-components'

export const CardContainer = styled.li`
  cursor: pointer;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grayFour};
  color: ${({ theme }) => theme.colors.grayLight};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.sizeTwo};
  }

  p {
    color: ${({ theme }) => theme.colors.grayOne};
    font-size: ${({ theme }) => theme.fontSizes.sizeFour};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayTwo};

    & > p {
      color: ${({ theme }) => theme.colors.grayLight};
    }
  }
`
