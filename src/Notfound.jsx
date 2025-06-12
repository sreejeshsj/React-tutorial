import React from 'react'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <div>
      <h1>oops your in wrong url please click the to navigate to Home!</h1>
      <Link to='/'  className='btn btn-primary'>Home</Link>
    </div>
  )
}

export default Notfound
