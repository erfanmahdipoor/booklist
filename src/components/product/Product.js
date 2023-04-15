import React from 'react'
import './Product.css'
const Product = (props) => {

  return (
    <div className='product'>
   <input type="text" onChange={props.change} value={props.title}/>
   <p>product.title:{props.title}</p>
   <p>product.price:{props.price}</p>
   <button onClick={props.click}> remove</button>
   <p>{props.children}</p>

    </div>
  )
}

export default Product