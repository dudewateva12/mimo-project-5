import React, {useContext} from 'react'
import './CartProductCard.css'
import { FavoritesContext } from '../../Contexts/FavoritesContext';
import { BsTrash3 } from "react-icons/bs";


function CartProductCard({product}) {

    const { removeCharacter } = useContext(FavoritesContext)

  return (
    <div className='cart-product-div'>
        <div className='cart-img-and-title'>
            <img className='product-img-cart' src={product.image} />
            <p id='product-title-cart'>{product.title}</p>
        </div>
        <div className='cart-details'>
            <p id='product-price-cart'>{product.price}€</p>
            <p>Quantity</p>



            {/* Changed to whole product instead of product id  */}
            <p onClick={()=>removeCharacter(product)} className='cart-trash'><BsTrash3 className='trash-icon'/></p>



            
        </div>
    </div>
  )
}

export default CartProductCard