import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import LogoImg from '../../assets/logo-login.svg'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api.js'
import {
  Container,
  LoginImage,
  ContainerItens,
  Input,
  SignInLink,
  Label
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido por favor😃😃😃')
      .required('O email é obrigatório🙂🙂🙂'),
    password: Yup.string()
      .required('Senha obrigatória🙂🙂🙂')
      .min(8, 'A senha deve ter no mínimo 8 digitos 😉😉😉')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados 👮🏽‍♂️',
        success: 'Bem-Vindo meu Consagrado! 😃',
        error: 'Deu ruim! Acesso negado ❌'
      }
    )
    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000)
  }
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={LogoImg} alt="logo-image" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            autoComplete="disable"
            error={errors.email?.message}
            {...register('email')}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            error={errors.password?.message}
            {...register('password')}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button
            name={'Entrar'}
            type="submit"
            style={{ marginTop: 75, marginBottom: 25 }}
          >
            Sign In
          </Button>
        </form>
        <SignInLink>
          Não possui conta?{' '}
          <Link style={{ color: '#fff' }} to="/cadastro">
            Sign Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
