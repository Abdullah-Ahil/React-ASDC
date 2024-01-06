import './Form.css'
import SigninWith from '../options/SigninWith'
import { useState } from 'react'

const Form = () => {
  const [login ,SetLogin] = useState(false)
  const [name , SetName] = useState();
  const [email , SetEmail] = useState();
  const [password , Setpassword] = useState();
  return (
    <div className="signup">
        <form onSubmit={(e)=>e.preventDefault()} className='Form'>
      {login ? <h1>Get Started Now</h1> : <div><h1>Welcome Back!</h1><p>Enter your Credentials to access your account</p></div>}
      <div className="inputs">
        {/* {!login && <label htmlFor="name">Name</label>
        <input type="text" id='name' placeholder='enter your name'/>} */}
        <label htmlFor="email">Email address</label>
        <input type="email" id='email' placeholder='enter your Email address'/>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' placeholder='password' /><br />
        {/* <input type="checkbox" id='check'/>I agree to the <u>terms & policy</u> */}
        <button type='submit'>Sign up</button>
      </div>
    </form>
    <SigninWith/>
    </div>
  )
}

export default Form
