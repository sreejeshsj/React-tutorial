import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Course from './course/Course'
import Footer from './footer'
import html from './assets/html.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Course price="$199" image={html} rating="9" show="true"/>
     <Course name="CSS" price="$199" image={html} rating="9"/>
     <Course name="JS" price="$499" image={html} rating="9"/>
     
    </>
  )
}

export default App
