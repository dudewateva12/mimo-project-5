import './FilterButtons.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function FilterButtons({product, setProductHold}) {
    const [filterButton, setFilterButton] = useState([])

    //https://fakestoreapi.com/products/categories

    useEffect(
        ()=>{
          //call api to get data
          axios.get('https://fakestoreapi.com/products/categories')
          .then(res=>{
            console.log(res.data)
            setFilterButton(res.data)
          })
          .catch(err=> console.log(err))
        }, []
      )


// /* NOTE added a function to handle filtering by category */
const setCategory = (category) =>{  
  const filteredProduct = product.filter(item=>item.category===category)
  // /* NOTE setting product hold instead of product so we can always filter the same products and not effect original products. */
  setProductHold(filteredProduct)
}


  return (
    <div className='filter-button'>
        {/* NOTE added another static link/button to filter back to all products.  */}
      <p onClick={()=>setProductHold(product)}>All</p>


{/* NOTE put filterButtons.map back to add the rest of the category links/buttons  */}
 {
  filterButton.map(item=><p onClick={()=>setCategory(item)} key={item}>{item}</p>)
 }
        </div>
      
  )
}

export default FilterButtons