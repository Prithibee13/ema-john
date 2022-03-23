import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./product.css";

const product = (props) => 
{
    const { product , addToCart } = props;
    const { name , price , seller , img , ratings } = product;

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                
            <p className='product-name'>Name : {name} </p>
            <p>Price  : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p><small>ratings {ratings}</small> </p>
            </div>
            <button onClick={ () => addToCart(product)} className='btn-cart'>
            <p>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default product;