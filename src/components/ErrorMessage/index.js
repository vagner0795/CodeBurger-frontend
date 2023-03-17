import PropTypes from 'prop-types'
import React from 'react'

import { ErrorMessageStyles } from './styles'

export function ErrorMessage({ children, ...rest }) {
  return <ErrorMessageStyles {...rest}>{children}</ErrorMessageStyles>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
