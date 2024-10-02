import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Modal.css'
import Cart from '../Cart/Cart';

const Modal = ({ isModal, setIsModal, targetSuit }) => {
    const navigate = useNavigate();
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const [itemsInCart, setItemsInCart] =useState(cartItems.length);
    const [showCartAlert, setShowCartAlert] = useState(false);
    const [targetColor, setTargetColor] = useState(targetSuit.imageURL.defaultImage);
    const [price, setPrice] = useState((targetSuit.price));
    const [selectedItem, setSelectedItem] = useState(
        { suitTitle: targetSuit.title, color: targetColor, price: targetSuit.price }
    );
    console.log(selectedItem)
    const [quantity, setQuantity] = useState(1)
    return (
        <>
            {isModal && targetSuit &&
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
                                    targetSuit.colors.length > 0 && <>
                                        <h6>Men Color</h6>
                                        <div className="allColors">
                                            {
                                                targetSuit.colors.map((color, index) => {
                                                    return (
                                                        <div key={index} className="color" style={{ backgroundColor: color }} onClick={() => setTargetColor(targetSuit.imageURL[color])}></div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>}
                            </div>
                            <div className="quantity">
                                <i className='fa-solid fa-minus' onClick={() => { quantity > 1 && setQuantity(quantity - 1) }}></i>
                                <div className="number">{quantity}</div>
                                <i className='fa-solid fa-plus' onClick={() => setQuantity(quantity + 1)}></i>
                            </div>
                            <div className="cartContainer">
                                <div className="addToCart" onClick={() => {
                                    const updatedItem = { ...selectedItem, color: targetColor, suitQuantity: quantity };
                                    setSelectedItem(updatedItem);
                                    const availableCart = JSON.parse(localStorage.getItem('cartItems')) || [];
                                    console.log(availableCart);
                                    localStorage.setItem('cartItems', JSON.stringify([...availableCart, { [targetSuit.itemCode]: updatedItem }]));
                                    setItemsInCart(availableCart.length + 1);
                                    setShowCartAlert(true)
                                    setTimeout(() => {
                                        setShowCartAlert(false)
                                    }, 2200);
                                }} >
                                    Add to cart
                                </div>
                                <div className="cart">
                                    <Cart itemsInCart={itemsInCart}/>
                                </div>
                            </div>
                            <div className="totaPrice">
                                Total: {price * quantity} PKR
                            </div>
                            <button onClick={() => navigate('/checkout')}>check out</button>
                        </div>
                        <div className="closeModal" onClick={() => setIsModal(false)}>
                            <i className='fa-solid fa-close'></i>
                        </div>
                        {
                            showCartAlert &&
                            <div className="cartAlert">
                                <img src="/asset/images/cart.gif" alt="" />
                            </div>
                        }

                    </div>
                </div>
            }

        </>
    )
}

export default Modal