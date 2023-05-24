// components
import { InputField, Label, InputContainer, SelectInput } from './styles'

export const Input = ({ children, type, name, placeholder, register, disabled }) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{children}</Label>
      <InputField 
        id={name} 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        disabled={disabled} 
        {...register}/>
    </InputContainer>
  )
}

export const Select = ({ name, label, options, register }) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <SelectInput id={name} name={name} {...register}>
        { options.map((option, index) => 
            (
              <option key={index} value={option.value}> {option.label} </option>
            )
          )
        }
      </SelectInput>
    </InputContainer>
  )
}
