import React, { useState } from 'react'
import './Home.css'
import Card from '../Card/Card'
import { menSuits } from '../../utils/clothesData'
import Modal from '../Modal/Modal'

const Home = () => {
  return (
    <div className='Home'>
      <div className="allCards">


        {
          menSuits.map((suit) => {
            return <Card suit={suit} />
          })
        }
      </div>
      

    </div>
  )
}

export default Home