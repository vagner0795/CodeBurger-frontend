import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { ContainerMain } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProduct } = useCart()

  useEffect(() => {
    const sumAllItems = cartProduct.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProduct, deliveryTax])

  const submitOrder = async () => {
    const order = cartProduct.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Verificando seu Pedido...',
      success: 'Pedido realizado com sucesso!',
      error: 'Falha ao realizar o seu pedido❌'
    })
  }
  return (
    <div>
      <ContainerMain>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </ContainerMain>
      <Button
        style={{ width: '100%', marginTop: 30 }}
        onClick={() => submitOrder()}
      >
        Finalizar Pedido
      </Button>
    </div>
  )
}
