import React, { useState,useContext,useRef } from 'react'
import {dataContext} from './Home'
function Counter() {
    const [count,setCount]=useState(0)
    const data=useContext(dataContext)
    let refCounter=useRef(0)
    function counter(){

      refCounter.current++
    }
  return (
    <div>
      <h1>{data}</h1>
      <h3 className='m-5'>{count}</h3>
      <button onClick={counter}>Up</button>
      <button onClick={()=>setCount(refCounter.current)}>Update</button>
    </div>
  )
}

export default Counter
