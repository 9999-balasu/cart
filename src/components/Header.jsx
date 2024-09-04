

import amezon2 from '../components/images/amezon2.jpeg'
import { Link } from 'react-router-dom'
import {CartStateContext} from  './Context'

import { useContext } from 'react';
const Header = () => {
  const state = useContext(CartStateContext);
 const cartItemsCount = state.cart .length
  
  return (
    <div style={{backgroundColor:'black',color:'white', display : 'flex',flexDirection : 'row'}}>
     
      <div style={{width : '80%'}}>
      <Link to={'/'}>
<img src={amezon2} alt='logo' width={100} height={80}/>
     
      </Link>
      </div>
      <Link to={'/cart'}> <div style={{width:'20%',padding : '5px',color:'white'}}>
        <span style={{}}>CART</span>
        <span style={{marginLeft:'20px'}}>{cartItemsCount}</span>
        </div></Link>
     
    </div>
  )
}

export default Header
