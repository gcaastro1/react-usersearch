// react
import React, { useContext, useEffect } from 'react'
// style
import { ButtonsContainer, Form } from '../styles'
// hook-form
import { useForm } from 'react-hook-form'
// yup
import { yupResolver } from '@hookform/resolvers/yup'
import { techSchema } from './techSchema'
// components
import { Input, Select } from '../../Inputs'
import { Button } from '../../Buttons/styles'
// context
import { TechContext } from '../../../contexts/TechContext'

export const TechForm = () => {
  const { status, modalType, techSubmit, currTech, techDelete } = useContext(TechContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(techSchema),
    defaultValues: {
      id: currTech.id,
      title: currTech.title,
      status: currTech.status,
    }
  })

  console.log(currTech)

  return (
    <Form noValidate onSubmit={handleSubmit(techSubmit)}>
      <Input
        type='text'
        name='tech'
        placeholder='Digite uma tecnologia'
        register={register('title')}
        disabled={modalType === 'updateTech'}
      >
        Tecnologia
      </Input>
      {errors.title && <span>{errors.title.message}</span>}
      <Select
        name='status'
        options={status}
        label='Selecione o status'
        register={register('status')}
      />
      {errors.status && <span>{errors.status.message}</span>}
      <ButtonsContainer>
        <Button btnType='primary' type='submit' className='btnFull'>
          { modalType === 'createTech' ? 'Cadastrar Tecnologia' : 'Salvar alterações'}
        </Button>
        
        { modalType === 'updateTech' ? <Button btnType='grayLight' type='button' onClick={() => { techDelete(currTech.id)}}>Excluir</Button> : <></>}
      </ButtonsContainer>
    </Form>
  )
}
