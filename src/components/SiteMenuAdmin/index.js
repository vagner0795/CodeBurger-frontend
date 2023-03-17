import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { ContainerMain, ItemContainer, ListLink } from './styles'

export function SiteMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <ContainerMain>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#FFFFFF' }} />
        <ListLink to={'/login'} onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </ContainerMain>
  )
}

SiteMenuAdmin.propTypes = {
  path: PropTypes.string
}
