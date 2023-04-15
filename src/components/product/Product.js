import React from 'react'
import './Product.css'
const Product = (props) => {

  return (
    <div className='product'>
      <input type="text" onChange={props.change} />
   <p>product.title:{props.title}</p>
   <p onClick={props.click} >product.price:{props.price}</p>
   <p>{props.children}</p>

    </div>
  )
}

export default Product