import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Course from './course/Course'
import Footer from './footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Course/>
     <Footer/>
    </>
  )
}

export default App
