import * as React from "react"
import { useState, useEffect} from "react";
import "./ProductCard.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ShoppingCart from "../ShoppingCart/ShoppingCart";


export default function ProductCards(prop) {
    const shoppingCartList=prop.shoppingCart
    const setShoppingCartList= prop.setShoppingCart
   
    

    const addToCart = (product) => {
      let checkProduct = shoppingCartList.find(item => item.id === product.id);
      let newItem;
    
      if (!checkProduct) {
        newItem = { id: product.id, quantity: 1 };
        setShoppingCartList([...shoppingCartList, newItem]);
      } else {
        newItem = [...shoppingCartList];
        newItem.forEach(item => {
          if (item.id === product.id) {
            item.quantity += 1;
          }
        });
        setShoppingCartList(newItem);
        console.log(shoppingCartList)
      }
      

    };

    
      const removeFromCart=(product)=>{
        let checkProduct= shoppingCartList.find(item=>item.id===product.id)
         let itemtoRemove
        if(checkProduct){
          itemtoRemove=[...shoppingCartList]
          console.log(itemtoRemove)
        
           itemtoRemove.forEach(item=>{
          if(item.id===product.id){
              if(item.quantity>0){
                item.quantity-=1
              }
              else{
                setShoppingCartList(itemtoRemove.filter(item=>item.quantity!==0))
              }
            }
          })
          }
          else{
            console.log("the item is not in shopping cart")
          }
          console.log(shoppingCartList)
        }


  
        




      
      
 
  return (

   
      <div className="product-card">
            <div key={prop.product.id}>
            <li key={prop.product.name}>
            <Link to={`/products/${prop.product.id}`}><img key={prop.product.id} src={prop.product.image}/>  </Link>
             <p key={prop.product.name}>{prop.product.name}</p>
             <p key={prop.product.price}>{prop.product.price}</p>
             <div className="itemCountview">
              <button onClick={() => addToCart(prop.product)}>+</button>  
      
             <button onClick={()=>removeFromCart(prop.product)}>-</button>
               
             </div>
            </li>
            </div>
    
      </div> 
    
  
  )
}
