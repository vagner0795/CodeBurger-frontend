import React from 'react'

import cartImage from '../../assets/carrinho-vazio.png'
import trashImg from '../../assets/lixo.png'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  ContainerMain,
  Image,
  Header,
  Body,
  EmptCart,
  CartImage,
  DeleteButton
} from './styles'

export function CartItems() {
  const { cartProduct, increaseProducts, decreaseProducts, deleteProducts } =
    useCart()

  console.log(cartProduct)
  return (
    <ContainerMain>
      <Header>
        <p></p>
        <p>Itens</p>
        <p style={{ paddingRight: 30 }}>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </Header>
      {cartProduct && cartProduct.length > 0 ? (
        cartProduct.map(product => (
          <Body key={product.id}>
            <Image src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
            <DeleteButton>
              <img src={trashImg} onClick={() => deleteProducts(product.id)} />
            </DeleteButton>
          </Body>
        ))
      ) : (
        <>
          <EmptCart>Carrinho vazio</EmptCart>
          <CartImage src={cartImage} />
        </>
      )}
    </ContainerMain>
  )
}
