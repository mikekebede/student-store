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
          
        
           itemtoRemove.forEach(item=>{
          if(item.id===product.id){
              if(item.quantity>0){
                item.quantity-=1
              }
              else{
                item.quantity=0
              }
            }
          })
          }
          else{
            console.log("the item is not in shopping cart")
          }
          setShoppingCartList( shoppingCartList.filter(item=>item.quantity!=0))
          console.log(shoppingCartList)
        }

 
  return (
    
   
      <div className="product-card">
            <div key={prop.product.id}>
            <li key={prop.product.name}>
            <div className="displayCard">
            <Link to={`/products/${prop.product.id}`}><img key={prop.product.id} src={prop.product.image}/>  </Link>
             <p class="itemname" key={prop.product.name}>{prop.product.name}</p>
             <p class="itemPrice" key={prop.product.price}>{prop.product.price}</p>
             <div className="itemCountview">
              <button className="purchasebuttons" onClick={() => addToCart(prop.product)}>+</button>  
              <span>{(shoppingCartList.find(item=>item.id===prop.product.id))? (shoppingCartList.find(item => item.id === prop.product.id).quantity):("0")}  </span>
             <button className="purchasebuttons" onClick={()=>removeFromCart(prop.product)}>-</button>
              </div>
             </div>
            </li>
            </div>
    
      </div> 
    
  
  )
}
