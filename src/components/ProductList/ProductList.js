import React from 'react'
import Product from '../product/Product'
const ProductList = props => {
  return (
    props.product.map((item,index)=>{ return <Product   change={(event)=>props.change(event,item.id)}
                                                                                title={item.title}
                                                                                price={item.price}
                                                                                key={item.id}
                                                                                click={()=>props.click(index)}
                                                                                isAuth={props.isAuth}

                                                                                                                                    />})
  )
}

export default ProductList