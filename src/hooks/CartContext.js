import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProducts] = useState([])

  const updateLocalStorage = async product => {
    await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(product))
  }

  const putProductInCart = async product => {
    const cartIndex = cartProduct.findIndex(prd => prd.id === product.id)

    let newCartProduct = []
    if (cartIndex >= 0) {
      newCartProduct = cartProduct
      newCartProduct[cartIndex].quantity =
        newCartProduct[cartIndex].quantity + 1

      setCartProducts(newCartProduct)
    } else {
      product.quantity = 1
      newCartProduct = [...cartProduct, product]
      setCartProducts(newCartProduct)
    }

    await updateLocalStorage(newCartProduct)
  }

  const deleteProducts = async productId => {
    const newCart = cartProduct.filter(product => product.id !== productId)

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const increaseProducts = async productId => {
    const newCart = cartProduct.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProduct.findIndex(pd => pd.id === productId)

    if (cartProduct[cartIndex].quantity > 1) {
      const newCart = cartProduct.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburguer:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <>
      <CartContext.Provider
        value={{
          putProductInCart,
          cartProduct,
          increaseProducts,
          decreaseProducts,
          deleteProducts
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must Be used with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
