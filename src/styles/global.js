import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root {
    background-color: ${({ theme }) => theme.colors.grayFour};
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
  }

  /* #root {
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  button, a {
    cursor: pointer;
    border: none;
    background: transparent;
    text-decoration: none;
  }

  ul, ol, li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label {
    font-family: 'Inter', sans-serif;
  }

  // containers

  .container {
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
  }

  .formContainer {
    width: 370px;
    max-width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  .formContainer ~ img {
    width: 144px;
  }

  // scrollbar

  *::-webkit-scrollbar {
    width: 6px;
    background-color: ${({ theme }) => theme.colors.grayFour};
  }

  *::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.grayFour};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grayThree};
    border-radius: 8px;
  }
`

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
