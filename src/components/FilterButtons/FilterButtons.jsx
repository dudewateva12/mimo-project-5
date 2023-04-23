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
            setFilterButton(res.data)
          })
          .catch(err=> console.log(err))
        }, []
      )
    

  return (
    <div className='filterButton'>
        {filterButton.map((item) => (<p onClick={() => setFilterButton(item)}>{item}</p>))}
        </div>
      
  )
}

export default FilterButtons