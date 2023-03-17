import React from 'react'

import CartLogo from '../../assets/logo-cart.svg'
import { CartItems, CartResume } from '../../components'
import { ContainerMain, CartImg, Wrapper } from './styles'

export function Cart() {
  return (
    <ContainerMain>
      <CartImg src={CartLogo} alt="Logo do carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </ContainerMain>
  )
}
