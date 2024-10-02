import React from 'react'
import './Button.css'

const Button = ({text, bg}) => {
  return (
    <div className={`Button`} style={{backgroundColor: `${bg ? "var(--primaryColor)" : "#ffffff"}`}}>
        {text}
    </div>
  )
}

export default Button