import React from 'react'
import Login from './login'
import {createContext} from 'react'

export const dataContext=createContext()
function Home() {
  const data="drilled Data"
  return (
    <div>
      <dataContext.Provider value={data}>
                <Login />
      </dataContext.Provider>

      <h1>Welcome to Home</h1>
    </div>
  )
}

export default Home
