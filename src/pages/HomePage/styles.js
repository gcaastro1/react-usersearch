import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayTwo};

  div {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
  }

  div > img {
    width: 100px;
  }

  a {
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.grayLight};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.grayThree};
    font-size: ${({ theme }) => theme.fontSizes.sizeTwo};
    padding: 10px 20px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayTwo};
    }
  }
`

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayTwo};

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 30px 0;
  }

  h1 {
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: ${({ theme }) => theme.fontSizes.sizeOne};
  }

  p {
    color: ${({ theme }) => theme.colors.grayOne};
    font-size: ${({ theme }) => theme.fontSizes.sizeFour};
  }

  @media (min-width: 660px) {
    div {
      flex-direction: row;
    }
  }
`
