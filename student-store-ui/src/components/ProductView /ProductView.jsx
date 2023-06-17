import * as React from "react"
import ProductCard from "../productCard/ProductCards"
import {useParams} from "react-router-dom"



export default function ProductView(props) {
console.log(props.products)
let products = props.products
const {productId} = useParams(); 
 
let product=products.filter((product)=>
  product.id == productId 

  )
  console.log(product)
  product = product[0]  
  console.log(product)
  return (
      <div>
     <ProductCard product={product}/>
     <p>{product.description}</p>
     </div>
        
  )
}
