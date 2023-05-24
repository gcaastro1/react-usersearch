// react
import React, { useContext, useEffect } from 'react'
// style
import { Form } from '../styles'
// hook-form
import { useForm } from 'react-hook-form'
// yup
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from './loginSchema'
// components
import { Input } from '../../Inputs/'
import { Button } from '../../Buttons/styles'
// context
import { UserContext } from '../../../contexts/UserContext'
// router-dom
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
  const navigate = useNavigate()
  const { submitLogin, loading, user } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  })

  useEffect(() => {
    if(user) {
      navigate('/home')
    }
  }, [user])

  return (
    <Form noValidate onSubmit={handleSubmit(submitLogin)}>
      <Input
        type='text'
        name='email'
        placeholder='Digite seu email'
        register={register('email')}
        disabled={loading}
      >
        Email
      </Input>
      {errors.email && <span>{errors.email.message}</span>}
      <Input
        type='password'
        name='password'
        placeholder='Digite sua senha'
        register={register('password')}
        disabled={loading}
      >
        Senha
      </Input>
      {errors.password && <span>{errors.password.message}</span>}
      <Button btnType='primary' type='submit'>
        Entrar
      </Button>
    </Form>
  )
}
