import React from 'react'

const ShoppingCart = (props) => {
  const shoppingCartList=props.shoppingCart
  const setShoppingCartList= props.setShoppingCart
  const products=props.products
  
  console.log(products)

  let purchasedItems = [];

 shoppingCartList.map((item, index) => {
 products.map((product, productindex) => {
     if (item.id === product.id) {
       purchasedItems = [...purchasedItems, { productitem: product, productQuantity: item.quantity }];
     }
   });
 });
 console.log(purchasedItems)

  return (
      <div className="shopping-cart">
        
      
      
      </div>
  
  )
}

export default ShoppingCart;
