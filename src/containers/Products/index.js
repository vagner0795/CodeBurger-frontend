import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/product-logo.svg'
import { CardProducts } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  ContainerMain,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategories, setactiveCategories] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }
    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategories === 0) {
      setfilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategories
      )

      setfilteredProducts(newFilteredProducts)
    }
  }, [activeCategories, products])

  return (
    <ContainerMain>
      <ProductImg src={ProductLogo} alt="Logo-products" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategories === category.id}
              onClick={() => {
                setactiveCategories(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </ContainerMain>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
