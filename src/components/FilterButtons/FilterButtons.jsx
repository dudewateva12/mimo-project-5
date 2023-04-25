import './FilterButtons.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function FilterButtons() {
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
      
    

  return (
    <div className='filter-button'>
       
        </div>
      
  )
}

export default FilterButtons