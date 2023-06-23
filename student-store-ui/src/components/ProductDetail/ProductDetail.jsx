import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductView from "../ProductView /ProductView";
import { useParams } from "react-router-dom";


export default function ProductDetail(props) {
    const {productId} = useParams(); 

    return(
        <div>
            {props.products && <ProductView shoppingcart={props.shoppingCart} setShoppingCart={props.setShoppingCart} products={props.products}/>}
       
        </div>
    )
   
    
  
}
