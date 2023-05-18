import React from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Details() {
    //need to know ID of product
   //get ID from the parameter in the url
   const {productId} = useParams()

   //create state to store character data
    const [productDetail, setProductDetail] = React.useState('')
    //https://fakestoreapi.com/products/THEN SOMTHING HERE IS THE PRODUCT ID
 
    //need to get the data from API when page loads

        React.useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res =>{
                console.log(res.data)
                //store it in state
                setProductDetail(res.data)
            })
            .catch(err => console.log(err))

        }, [] //this means only run once when page loads

    )

  return (
    <div className='details-container'>
        <div className='product-info'>
            <div className='details-img'>
        <img src={productDetail?.image} 
        />
        </div>
            <div className='details-items'>
            <p>{productDetail?.title}</p>
            <p>{productDetail?.price}</p>
            
            <p>Description: {productDetail?.description}</p>

            <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Details