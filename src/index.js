import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from '../src/styles/globalStyles'
import AppProvider from './hooks'
import Routes from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <GlobalStyles />
    <ToastContainer autoClose={4000} theme="colored" />
    <AppProvider>
      <Routes />
    </AppProvider>
  </>
)
