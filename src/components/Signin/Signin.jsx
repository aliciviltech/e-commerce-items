import React, { useState } from 'react'
import './Signin.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const handleInputF=(e)=>{
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
  const handleSubmitF=()=>{
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];
    const requiredUser = userCredentials.filter((user)=>{
      return user.email === inputs.email;
    })
    if(requiredUser.length>0 && (inputs.email === requiredUser[0].email && inputs.password === requiredUser[0].password)){
      alert('Signin success!')
      window.location.href = '/'
    } else{
      alert('sorry! invalid credentials')
    }
    setInputs({email:'',password:''})
  }


  const navigate = useNavigate();
  return (
    <div className='Signin'>

      {/* ========== form side ======== */}
      <div className="formSide">
        <div className="logo" onClick={()=>navigate('/')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8iJvDm9cFn8OxVQlRhuB5IRY0VXqw_d-kQTZjitYMKGr1tGsumy-6ygGrZL0FIUd4so&usqp=CAU" alt="logo" />
        </div>
        <div className="heading heading1">
          Sign in to Ideas
        </div>
        <div className="icons">
          <i className='fa-brands fa-facebook'></i>
          <i className='fa-brands fa-google-plus'></i>
          <i className='fa-brands fa-linkedin'></i>
        </div>
        <span className='paragraph1'>or use your email account</span>

        {/* form */}
        <div className="form">
          <div className="emailInput">
            <i className="fa-solid fa-envelope"></i>
            <input onChange={handleInputF} value={inputs.email} name='email' type="email" placeholder='Email' />
          </div>
          <div className="passwordInput">
            <i className="fa-solid fa-lock"></i>
            <input onChange={handleInputF} name='password' value={inputs.password} type="password" placeholder='Password' />
          </div>
        </div>
        <span className='paragraph1' id='forgotPassword'>Forgot your password?</span>
        <div onClick={handleSubmitF} className="signinBtn">
        <Button text={"Sigin"} bg />
        </div>
      </div>


      {/* ========== welcome side ======== */}
      <div className="welcomeSide">
        <div className="heading heading2">
          Welcome Back!
        </div>
        <div className="signup paragraph1">
          <p>Don't have an account?</p>
          <div onClick={()=>navigate('/signup')} className="signupBtn">
            <Button text={"Signup"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin 