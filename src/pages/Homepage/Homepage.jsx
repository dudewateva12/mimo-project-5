import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import FilterButtons from '../../components/FilterButtons/FilterButtons'



function Homepage() {
  //create state for category  
const[product, setProduct] = useState([])

// /* NOTE added a new state to be updated so product can stay the same and not change. */
const[productHold, setProductHold] = useState([])

//get api data when page loads
//https://fakestoreapi.com/products/categories


useEffect(
  ()=>{
    //call api to get data
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      setProduct(res.data)
      setProductHold(res.data)
    })
    .catch(err=> console.log(err))
  }, []
)


  return (
    <div className='home-container'>  


    {/* NOTE added props to FilterButtons  */}
    <FilterButtons product={product} setProductHold={setProductHold}/>   


    {/* NOTE replaced product with productHold  */}
      <div className='category-container'>
        
        {
          productHold.map(item=><ProductCard key={item.id} product={item} />)
        }
        
      </div>
    </div>
  )
}

export default Homepage
