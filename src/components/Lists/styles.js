import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  .listHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  h1 {
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: ${({ theme }) => theme.fontSizes.sizeOne};
    font-weight: 500;
  }
`

export const ListContent = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 400px;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.grayThree};

  ul {
    max-height: 360px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
  }

  ul::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.grayThree};
  }

  ul::-webkit-scrollbar {
    width: 0;
  }
`
