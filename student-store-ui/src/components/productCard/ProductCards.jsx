import * as React from "react"
import { useState, useEffect} from "react";
import "./ProductCard.css"


export default function ProductCards(prop) {
    
 
  return (
    <section className="productcard">
      {<div className="product-card">
            <div key={prop.product.id}>
            <li key={prop.product.name}>
             <img key={prop.product.id} src={prop.product.image}/>
             <p key={prop.product.name}>{prop.product.name}</p>
             <p key={prop.product.price}>{prop.product.price}</p>
            </li>
            </div>
    
      </div> }
    </section>
  )
}
