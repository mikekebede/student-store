import * as React from "react"
import { useState, useEffect} from "react";
import "./ProductCard.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


export default function ProductCards(prop) {
    
 
  return (

    <Link to={`/products/${prop.product.id}`}>
      {<div className="product-card">
            <div key={prop.product.id}>
            <li key={prop.product.name}>
             <img key={prop.product.id} src={prop.product.image}/>
             <p key={prop.product.name}>{prop.product.name}</p>
             <p key={prop.product.price}>{prop.product.price}</p>
            </li>
            </div>
    
      </div> }
    
    </Link>
  )
}
