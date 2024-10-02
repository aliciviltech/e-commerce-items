import React, { useState } from 'react'
import './Home.css'
import Card from '../Card/Card'
import { menSuits } from '../../utils/clothesData'
import Modal from '../Modal/Modal'
import Header from '../Header/Header'

const Home = () => {
  return (
    <div className='Home'>
      <Header/>
      <div className="allCards">


        {
          menSuits.map((suit) => {
            return <Card key={suit.id} suit={suit} />
          })
        }
        
      </div>
      

    </div>
  )
}

export default Home