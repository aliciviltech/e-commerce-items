import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ isModal, setIsModal, targetSuit }) => {
    const [targetColor, setTargetColor] = useState(targetSuit.imageURL2.defaultImage);
    const [totalPrice, setTotalPrice] = useState((targetSuit.price))
    console.log(totalPrice)
    const [quantity, setQuantity] = useState(0)
    return (
        <>
            {isModal &&
                <div className="modalContainer">
                    <div className='Modal'>
                        <div className="imageSide">
                            <img src={targetColor} alt="" />
                        </div>
                        <div className="detailSide">
                            <h2>{targetSuit.title}</h2>
                            <p> <b>SKU#:</b> MEN-FABRIC-411643 -P </p>
                            <p>PKR {targetSuit.price}</p>
                            <div className="colorChoices">
                                {
                                    targetSuit.colors.length>0 && <>
                                <h6>Men Color</h6>
                                <div className="allColors">
                                {
                                    targetSuit.colors.map((color) => {
                                        return (
                                        <div className="color" style={{ backgroundColor: color }} onClick={()=>setTargetColor(targetSuit.imageURL2[color])}></div>
                                    )
                                    })
                                }
                                </div>
                                </>}
                            </div>
                            <div className="quantity">
                                <i className='fa-solid fa-minus' onClick={()=>{quantity>0 && setQuantity(quantity-1)}}></i>
                                <div className="number">{quantity}</div>
                                <i className='fa-solid fa-plus' onClick={()=>setQuantity(quantity+1)}></i>
                            </div>
                            <div className="addToCart">Add to cart</div>
                            <div className="totaPrice">
                                Total: {totalPrice*quantity} PKR
                            </div>
                        </div>
                        <div className="closeModal" onClick={() => setIsModal(false)}>
                            <i className='fa-solid fa-close'></i>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Modal