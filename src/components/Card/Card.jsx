import React, { useState } from 'react'
import './Card.css'
import Modal from '../Modal/Modal';

const Card = ({suit}) => {
  const [isModal, setIsModal] = useState(false);
  const [targetSuit, setTargetSuit] = useState(suit);
  return (
    <div className='Card'>
        <div className="image">
            <img src={suit.imageURL} alt="suit_image" />
        </div>
        <div className="details">
            <div className="text">
            <h5>{suit.title}</h5>
            <p>PKR {suit.price}</p>
            </div>
            <div className="detailsButton" onClick={()=>{setIsModal(true); setTargetSuit(suit)}}>
                <img src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png" alt="" />
            </div>
        </div>

      
        <Modal isModal={isModal} setIsModal={setIsModal} targetSuit={targetSuit}/>
        
    </div>
  )
}

export default Card