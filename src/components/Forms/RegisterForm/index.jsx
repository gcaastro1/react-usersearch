// react
import React, { useContext, useEffect} from 'react'
// router-dom
import { useNavigate } from 'react-router-dom'
// styles
import { Form } from '../styles'
// hook-form
import { useForm } from 'react-hook-form'
// yup
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from './registerSchema'
// components
import { Button } from '../../Buttons/styles'
import { Input, Select } from '../../Inputs'
// context
import { UserContext } from '../../../contexts/UserContext'

export const RegisterForm = () => {
  const { submitRegister, loading, modules, registerUser } = useContext(UserContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  })

  useEffect(() => {
    if(registerUser) {
      navigate('/')
    }
  }, [registerUser])

  return (
      <Form noValidate onSubmit={handleSubmit(submitRegister)}>
        <Input
          type='text'
          name='name'
          placeholder='Digite aqui seu nome'
          register={register('name')}
          disabled={loading}
          event={() => {
            setFormCheck({ ...formCheck })
          }}
        >
          {' '}
          Nome{' '}
        </Input>
        {errors.name && <span>{errors.name.message}</span>}

        <Input
          type='email'
          name='email'
          placeholder='Digite aqui seu email'
          register={register('email')}
          disabled={loading}
        >
          {' '}
          Email{' '}
        </Input>
        {errors.email && <span>{errors.email.message}</span>}

        <Input
          type='password'
          name='password'
          placeholder='Digite aqui sua senha'
          register={register('password')}
          disabled={loading}
        >
          {' '}
          Senha{' '}
        </Input>
        {errors.password && <span>{errors.password.message}</span>}

        <Input
          type='password'
          name='repeatPassword'
          placeholder='Digite novamente sua senha'
          register={register('passwordConfirmation')}
          disabled={loading}
        >
          {' '}
          Confirmar Senha{' '}
        </Input>
        {errors.passwordConfirmation && (
          <span>{errors.passwordConfirmation.message}</span>
        )}

        <Input
          type='text'
          name='bio'
          placeholder='Fale sobre você'
          register={register('bio')}
          disabled={loading}
        >
          {' '}
          Bio{' '}
        </Input>
        {errors.bio && <span>{errors.bio.message}</span>}

        <Input
          type='text'
          name='contact'
          placeholder='Opção de contato'
          register={register('contact')}
          disabled={loading}
        >
          {' '}
          Contato{' '}
        </Input>
        {errors.contact && <span>{errors.contact.message}</span>}

        <Select
          name='course_module'
          options={modules}
          label='Selecionar módulo'
          register={register('course_module')}
        />
        {errors.course_module && <span>{errors.course_module.message}</span>}

        <Button btnType='primary' type='submit' disabled={loading}>
          Cadastrar
        </Button>
      </Form>
  )
}
