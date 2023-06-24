import * as React from "react"
import ProductCard from "../productCard/ProductCards"
import {useParams} from "react-router-dom"
import ProductCards from "../productCard/ProductCards";



export default function ProductView(props) {

let products = props.products
const {productId} = useParams(); 
 
let product=products.filter((product)=>
  product.id == productId 

  )
 
  product = product[0]  
 
  return (
      <div>
     <ProductCard class="productviewcard" shoppingcart={props.shoppingCart} setShoppingCart={props.setShoppingCart} product={products}/>
     <p>{product.description}</p>
     </div>
        
  )
}
