import './App.css'; 
import Product from './components/product/Product'
import { useState } from 'react';
function App() {
  const [productsState,setProductState]=useState({
    product:[
      {title:"book1", price:30 },
      {title:"book2", price:40 },
      {title:"book3", price:50 }
    ]
  })
  const changePriceHandler=(title)=>{
    setProductState({
      product:[
        {title:title, price:30+100 },
        {title:"book2", price:40+100 },
        {title:"book3", price:50+100 }
      ]
    })
  }
 const changeTitleHandler=(event)=>{
  setProductState({
    product:[
      {title: event.target.value , price:30+100 },
      {title:"book2", price:40+100 },
      {title:"book3", price:50+100 }
    ]
  })
  }
  return (
    <div className='center'>
      <h1>bookShop</h1>
 
    <Product change={changeTitleHandler}  title={productsState.product[0].title} price={productsState.product[0].price}/>
    <Product  title={productsState.product[1].title} price={productsState.product[1].price}/>
    <Product click={changePriceHandler} title={productsState.product[2].title} price={productsState.product[2].price}/>
    <button onClick={()=>changePriceHandler("newTitle")} >change price</button>
  
    </div>
  );
}

export default App;
