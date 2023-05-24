import * as yup from 'yup'

export const techSchema = yup.object().shape({
  title: yup.string().required('O nome é obrigatório'),
  status: yup
    .string()
    .required('O status é obrigatório')
    .oneOf(['Iniciante', 'Intermediário', 'Avançado'])
    .label('Selecione um status válido.'),
})
