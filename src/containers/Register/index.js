import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LogoImg from '../../assets/logo-login.svg'
import RegisterImg from '../../assets/register-image.svg'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api.js'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Input,
  SignInLink,
  Label
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório🙂🙂🙂'),
    email: Yup.string()
      .email('Digite um e-mail válido por favor😃😃😃')
      .required('O email é obrigatório🙂🙂🙂'),
    password: Yup.string()
      .required('Senha obrigatória🙂🙂🙂')
      .min(8, 'A senha deve ter no mínimo 8 digitos 😉😉😉'),
    confirmPassword: Yup.string()
      .required('Confirmar Senha é obrigatório🙂🙂🙂')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso 😃')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado 😔')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema tente novamente mais tarde')
    }
  }
  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Register-image" />
      <ContainerItens>
        <img src={LogoImg} alt="logo-image" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            autoComplete="disable"
            error={errors.name?.message}
            {...register('name')}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            autoComplete="disable"
            error={errors.email?.message}
            {...register('email')}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            error={errors.password?.message}
            {...register('password')}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button
            name={'Entrar'}
            type="submit"
            style={{ marginTop: 25, marginBottom: 25 }}
          >
            Sign Up
          </Button>
        </form>
        <SignInLink>
          Já possui conta?{' '}
          <Link style={{ color: '#fff' }} to="/login">
            Sign In
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
