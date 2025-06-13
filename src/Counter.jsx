import React, { useState,useContext } from 'react'
import {dataContext} from './Home'
function Counter() {
    const [count,setCount]=useState(0)
    const data=useContext(dataContext)
    function counter(){

        setCount(preCount=>preCount+1)
        setCount(preCount=>preCount+1)
    }
  return (
    <div>
      <h1>{data}</h1>
      <h3 className='m-5'>{count}</h3>
      <button onClick={counter}>Up</button>
    </div>
  )
}

export default Counter
