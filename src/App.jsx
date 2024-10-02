import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckOut from './components/CheckOut/CheckOut'
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
