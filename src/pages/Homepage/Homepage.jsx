import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import FilterButtons from '../../components/FilterButtons/FilterButtons'



function Homepage() {
  //create state for category  
const[product, setProduct] = useState([])

//get api data when page loads
//https://fakestoreapi.com/products/categories


useEffect(
  ()=>{
    //call api to get data
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      setProduct(res.data)
    })
    .catch(err=> console.log(err))
  }, []
)


  return (
    <div className='home-container'>   
    <FilterButtons />   
      <div className='category-container'>
        {
          product.map(item=><ProductCard key={item.id} product={item} />)
        }
      </div>
    </div>
  )
}

export default Homepage
