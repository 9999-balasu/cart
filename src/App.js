
import './App.css';
import { BrowserRouter , Routes , Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';
import Cart from './components/Cart';


function App() {
  return (


   
   <BrowserRouter>
 
   <li><Link to="/">Home</Link></li>
   <li><Link to="/cart">Cart</Link></li>
  
   <Routes>
    <Route path = '/' element ={
<div>

<Header/>
<ProductListing/>
<Footer/>

</div>
    }></Route>

<Route path = '/cart' element ={
<div>
<Header/>
<Cart/>
<Footer/>

</div>
    }>
      
    </Route>
     </Routes>
   </BrowserRouter> 
   
  );
}

export default App;
