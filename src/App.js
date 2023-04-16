import './App.css'; 
import Product from './components/product/Product'
import { useState } from 'react';
import Main from './components/Main/Main';
import ProductList from './components/ProductList/ProductList';
function App() {
  const [productsState,setProductState]=useState({
    product:[
      {title:"book1", price:30, id:1},
      {title:"book2", price:40, id:2},
      {title:"book3", price:50, id:3}
    ],
    showProduct:false,
    removeMain:true
  })
  const changePriceHandler=(title)=>{
    setProductState({
      product:[
        {title:title, price:30+100 },
        {title:"book2", price:40+100 },
        {title:"book3", price:50+100 }
      ],
      showProduct:true
    })
  }
 const changeTitleHandler=(event,id)=>{
 const productIndex =productsState.product.findIndex((item)=>{ return item.id===id})
 console.log(productIndex);
 let productC = productsState.product[productIndex] 
 console.log(productC);
 console.log(event.target.value);
 productC.title=event.target.value
 const products =[...productsState.product]
 console.log(productsState.product);
 products[productIndex]=productC
 setProductState({
  product:products,
  showProduct:true
 })


  
  }
  const showProductHandler=()=>{
  let shProduct  =productsState.showProduct
 setProductState({
  product:[
    {title:"book1", price:30 },
    {title:"book2", price:40 },
    {title:"book3", price:50 }
  ],
  showProduct:!shProduct
 })
  }
const removeProductHandler=(productIndex)=>{
const nProducts=[...productsState.product]
nProducts.splice(productIndex,1)
setProductState({   
  product:nProducts,
  showProduct:true
})
}
console.log(productsState.product);
  
//  const mapProduct = productsState.product.map((item,index)=>{ return <Product   change={(event)=>changeTitleHandler(event,item.id)}
//                                                                                 title={item.title}
//                                                                                 price={item.price}
//                                                                                 key={item.id}
//                                                                                 click={()=>removeProductHandler(index)}
//                                                                                                                                     />})
  return (
    <div className='center'>
      <button onClick={()=>{setProductState({removeMain:false})}}>remove main</button>
  {productsState.removeMain? <Main show={showProductHandler} product={productsState.showProduct}/>:null}
     {productsState.showProduct?  
      <div> 
       <ProductList product={productsState.product} click={removeProductHandler} change={changeTitleHandler}/>
      </div>: null}
      <button className='bluBtn' onClick={()=>changePriceHandler("changed")}>change price</button>
    </div>
  );
}

export default App;
