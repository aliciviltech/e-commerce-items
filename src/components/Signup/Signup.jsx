import React, { useState } from 'react'
import './Signup.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router'
import ModalPopup from '../ModalPopup/ModalPopup'

const Signup = () => {

  // ======== modal popup =========
  const [modalShow, setModalShow] = useState(false);

  // ============= inputs ========
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleInputF=(e)=>{
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
  const handleSubmitF=()=>{
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];
    if(inputs.name.trim() !== '' && inputs.email.trim() !== '' && inputs.password.trim() !== ''){
      userCredentials.push(inputs);
      localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
      setInputs({name:'',email:'',password:''})
      setModalShow(true);
      // window.location.href = '/signin'
    } else{
      alert('please fill all the fields')
    }
  }

  // navigate
  const navigate = useNavigate();
 
 
  return (
    <div className='Signup'>

      {/* ============= welcome side =============== */}
      <div className="welcomeSide">
        <div className="logo" onClick={()=>navigate('/')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8iJvDm9cFn8OxVQlRhuB5IRY0VXqw_d-kQTZjitYMKGr1tGsumy-6ygGrZL0FIUd4so&usqp=CAU" alt="logo" />
        </div>
        <div className="heading heading2">
        Style Redefined!
        </div>
        <div className="signup paragraph1">
          <p>Already have an account??</p>
          <div onClick={() => navigate('/signin')} className="signinBtn">
            <Button text={"Signin"} />
          </div>
        </div>
      </div>


      {/* =============== form side ================== */}
      <div className="formSide">

        <div className="heading heading1">
          Create Account
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
            <i className="fa-solid fa-user"></i>
            <input name='name' onChange={handleInputF} value={inputs.name} type="text" placeholder='Name' />
          </div>
          <div className="emailInput">
            <i className="fa-solid fa-envelope"></i>
            <input name='email' onChange={handleInputF} value={inputs.email} type="email" placeholder='Email' />
          </div>
          <div className="passwordInput">
            <i className="fa-solid fa-lock"></i>
            <input name='password' onChange={handleInputF} value={inputs.password} type="password" placeholder='Password' />
          </div>
        </div>
        <span className='paragraph1' id='forgotPassword'>Forgot your password?</span>
        <div onClick={handleSubmitF} className="signupBtn">
        <Button text={"Sigup"} bg />
        </div>
      </div>

      {
        modalShow 
        &&
        <ModalPopup btnText={'Close'} modalMsg={'Signup Success!'} setModalShow={setModalShow} iconClass={"fa-regular fa-circle-check"}/>
      }

    </div>
  )
}

export default Signup