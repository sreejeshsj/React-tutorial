import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Course from './Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Course/>
    </>
  )
}

export default App
