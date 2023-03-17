import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarrousel, OffersCarrousel } from '../../components'
import { ContainerMain, HomeImg } from './styles'

export function Home() {
  return (
    <ContainerMain>
      <HomeImg src={HomeLogo} alt="Logo-home" />
      <CategoryCarrousel />
      <OffersCarrousel />
    </ContainerMain>
  )
}
