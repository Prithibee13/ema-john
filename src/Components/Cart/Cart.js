import React from 'react';
import "./Cart.css"

const Cart = (props) => 
{
     const { cart } = props;
     
     let total = 0;
     let ship = 0;
     
     for(const product of cart)
     {
         const { price , shipping } = product;
         total = total + price;
         ship = ship + shipping;
     }

     const tax = parseFloat((total * 0.1).toFixed(2));

     const grandTotal = total + tax + ship;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>

            <p>Selected Item {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipig : ${ship}</p>
            <p>Tax : {tax}</p>
            <h5>Grand Total : {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;