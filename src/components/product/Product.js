import React from 'react'

const Product = (props) => {
  return (
    <div>
   <p>product.name:{props.title}</p>
   <p>product.name:{props.price}</p>
   <p>{props.children}</p>

    </div>
  )
}

export default Product