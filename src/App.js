import './App.css'; 
import Product from './components/product/Product'
import { useState } from 'react';
function App() {
  const [productsState,setProductState]=useState({
    product:[
      {title:"book1", price:30 },
      {title:"book2", price:40 },
      {title:"book3", price:50 }
    ],
    showProduct:false
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
 const changeTitleHandler=(event)=>{
  setProductState({
    product:[
      {title: event.target.value , price:30+100 },
      {title:"book2", price:40+100 },
      {title:"book3", price:50+100 }
    ],
    showProduct:true
  })
  }
  const showProductHandler=()=>{
    // console.log("show");
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
  
 const mapProduct = productsState.product.map((item)=>{ return <Product  change={changeTitleHandler}
                                                                 title={item.title}
                                                                 price={item.price}
                                                                 click={changePriceHandler}
                                                                               />})
  // console.log(productsState.product);
  return (
    <div className='center'>
      <h1>bookShop</h1>
      <button className='redBtn' onClick={showProductHandler}>show/hide</button>
     {productsState.showProduct? 
      <div> 
        {mapProduct}
      </div>: null}
      <button className='bluBtn' onClick={()=>changePriceHandler("changed")}>change price</button>
    </div>
  );
}

export default App;
