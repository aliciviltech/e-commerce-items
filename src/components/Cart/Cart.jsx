import React, { useState } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router';

const Cart = ({itemsInCart}) => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) ||[] );
    // const [itemsInCart, setItemsInCart] =useState(cartItems.length);
    // setItemsInCart(cartItems.length);
    return (
        <div className='Cart'>
            <i className="fa-solid fa-cart-shopping" onClick={() => navigate('/checkout')}></i>
            {itemsInCart>0 && <div className='cartHighlight'>{itemsInCart}</div>}
        </div>
    )
}

export default Cart