import styled from 'styled-components'

export const InputField = styled.input`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.grayLight};
  background-color: ${({ theme }) => theme.colors.grayTwo};
  border: 2px solid ${({ theme }) => theme.colors.grayTwo};
  font-weight: 500;
  outline: none;
  padding: 10px 8px;
  transition: 0.3s;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.grayLight};
  }
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sizeFour};
  color: ${({ theme }) => theme.colors.grayLight};
`

export const InputContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: none;
`

export const SelectInput = styled.select`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.grayLight};
  background-color: ${({ theme }) => theme.colors.grayTwo};
  border: 2px solid ${({ theme }) => theme.colors.grayTwo};
  font-weight: 500;
  outline: none;
  padding: 10px 8px;
  transition: 0.3s;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.grayLight};
  }
`
