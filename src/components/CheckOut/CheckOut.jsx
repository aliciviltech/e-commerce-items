import React, { useState } from 'react'
import './CheckOut.css'
import Header from '../Header/Header'

const CheckOut = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')));
  // const [updateItems, setUpdateItems] = useState(cartItems);
  const updatedItemsF = (thisSuit)=>{
    const updatedItems = cartItems.filter((item)=>{
      const objKey = Object.keys(item)[0];
      const suit = item[objKey];
      return suit.suitTitle !==  thisSuit.suitTitle;
    })
    setCartItems(updatedItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  }
  return (
    <>    
    <Header/>
    {cartItems.length>0 ?
    <div className='CheckOut'>
      <h1>Check Out</h1>
       {cartItems.map((item, index) => {
        const objKey = Object.keys(item)[0];
        const suit = item[objKey];
        console.log(suit.suitTitle);
        return (
          <div key={index} className="item">
            <div className="textBox">
              <h3>{suit.suitTitle}</h3>
              <h5>color: {suit.color}</h5>
              <p>Quantity: {suit.suitQuantity}</p>
              <p>Price per suit: {suit.price}</p>
              <h3>Total Amount: {suit.suitQuantity * suit.price}</h3>
              <div className="removeItem">
                <button onClick={()=>{updatedItemsF(suit)}} >x Remove Item</button>
              </div>
            </div>
            <div className="imageBox">
              <img src={suit.color} />
            </div>
          </div>
        )
      })
    }
        


      {/* ================== grand total ================= */}
      <div className="grandTotal">
        {
          cartItems && cartItems.length > 0
            ?
            (() => {
              // Calculate total in a single pass using reduce
              const total = cartItems.reduce((sum, item) => {
                const objKey = Object.keys(item)[0];
                const suit = item[objKey];
                return sum + (suit.suitQuantity * suit.price); // Accumulate total
              }, 0);
              return <h2>{'Grand Total: PKR ' + total}/- </h2>
            })()
            : 0
        }
        <button>Place Order</button>
      </div>
    </div>
    :
        <h1>No items added in cart</h1>
      }
    </>

  )
}




export default CheckOut


