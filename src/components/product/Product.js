import React from 'react'
import './Product.css'
// import Container from '../../hoc/Container'
// import Wrapper from '../../hoc/Wrapper'
const Product = (props) => {

  return (
    <div className='product'>
      {props.isAuth?<p>log in</p>:<p>please try again</p>}
   <input type="text" onChange={props.change} value={props.title}/>
   <p>product.title:{props.title}</p>
   <p>product.price:{props.price}</p>
   <button onClick={props.click}> remove</button>
   <p>{props.children}</p>

    </div>
  )
}

export default Product