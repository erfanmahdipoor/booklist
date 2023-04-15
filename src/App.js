import './App.css'; 
import Product from './components/product/Product'
function App() {
  return (
    <div>
      <h1>bookShop</h1>
    <Product  title="book1" price="20">
      discount=20%
    </Product>
    <Product  title="book2" price="30"/>
    <Product  title="book3" price="40"/>
  
    </div>
  );
}

export default App;
