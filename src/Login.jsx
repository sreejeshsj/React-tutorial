import React, { useState } from "react";
import Counter from "./Counter";

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [check,setCheck]=useState(null)
  
  const handleSubmit=(e)=>{
    
    e.preventDefault()
    if (password==confirmPassword){
        setCheck('true')
        console.log("password is same")
    }else{
        setCheck('false')
        console.log("password is not same")
    }
  }
  return (
    <div>
      <Counter/>
      <form className="my-5" style={{width:"50%" , margin:"auto"}} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Agree</label>
        </div>
        {check === null ? null : ( check ==='true' ? <p>Password is same</p> :  <p>Not same</p>)}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
