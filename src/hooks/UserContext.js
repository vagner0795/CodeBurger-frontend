import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [useData, setUseData] = useState({})

  const putUserData = async userInfo => {
    setUseData(userInfo)

    await localStorage.setItem('codeburguer:userData', JSON.stringify(userInfo))
  }

  const logOut = async () => {
    await localStorage.removeItem('codeburguer:userData')
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburguer:userData')

      if (clientInfo) {
        setUseData(JSON.parse(clientInfo))
      }
    }

    loadUserData()
  }, [])

  return (
    <>
      <UserContext.Provider value={{ putUserData, useData, logOut }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('User must Be used with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
