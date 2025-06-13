import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    function counter(){
        setCount(preCount=>preCount+1)
        setCount(preCount=>preCount+1)
    }
  return (
    <div>
      <h3 className='m-5'>{count}</h3>
      <button onClick={counter}>Up</button>
    </div>
  )
}

export default Counter
