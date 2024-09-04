import { useContext } from "react"
import { CartDispatchContext } from "./Context"




const Product = ({id,title,price,image,rating}) => {
   const dispatch = useContext(CartDispatchContext)
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <div>
         <img src={image} alt="" width={200} height={200}/>
         </div> 
      <div>
        <h1>{title}</h1>
        <h1>{price}</h1>
        <h1>{rating}</h1>
        <button style={{backgroundColor:"yellow"}}
        onClick={()=>dispatch({type : 'ADD_TO_CART' ,
          payload :{id : id,title :title ,price : price ,image : image , rating :rating } })}
          
        >ADD to cart</button>
        </div> 
    </div>
  )
}

export default Product
