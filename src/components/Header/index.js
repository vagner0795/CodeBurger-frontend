import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart-icon.png'
import User from '../../assets/user-icon.png'
import { useUser } from '../../hooks/UserContext'
import {
  ContainerMain,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  const { logOut, useData } = useUser()

  const logoutUser = () => {
    logOut()
    push('/login')
  }

  const {
    push,
    location: { pathname }
  } = useHistory()
  return (
    <ContainerMain>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="logo-carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={User} alt="logo-pessoa" />
        </PageLink>
        <ContainerText>
          <p>Olá, {useData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </ContainerMain>
  )
}
