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
  return (
    <div>
      <h1>bookShop</h1>
 
    <Product  title={productsState.product[0].title} price={productsState.product[0].price}/>
    <Product  title={productsState.product[1].title} price={productsState.product[1].price}/>
    <Product  title={productsState.product[2].title} price={productsState.product[2].price}/>
    
  
    </div>
  );
}

export default App;
