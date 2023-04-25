import React from 'react'
import './ProductCard.css'


function ProductCard({product}) {
  return (
    <div className='product-card'> 
       <div className='product-img'><img src={product.image} /></div>
        <p id='product-title'>{product.title}</p>
        <p id='product-category'>{product.category}</p>
        <p id='product-price'>{product.price}€</p>
    </div>
  )
}

export default ProductCard