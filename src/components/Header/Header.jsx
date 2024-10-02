import './Header.css'
import Cart from '../Cart/Cart';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [itemsInCart, setItemsInCart] = useState(cartItems.length);

    return (

        <div className='Header'>
            <div className="headerRow1">
                <span onClick={()=>navigate('/signin')}>Signin</span>
                <span onClick={()=>navigate('/signup')}>Signup</span>
            </div>
            <div className="headerRow2">
                <div className="logo">
                    <img src="https://www.gulahmedshop.com/media/logo/stores/1/ideas-logo.png?width=170" alt="" />
                </div>
                <div className="anchors">
                    <a href="/">Home</a>
                    <a href="">About</a>
                    <a href="">Categories</a>
                    <a href="">Contact us</a>
                </div>
                <Cart itemsInCart={itemsInCart} />
            </div>
        </div>
    )
}

export default Header