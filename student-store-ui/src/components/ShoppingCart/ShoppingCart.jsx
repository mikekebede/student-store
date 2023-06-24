import React, { useState } from "react";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  const shoppingCartList=props.shoppingCart
  const setShoppingCartList= props.setShoppingCart
  const products=props.products
  const [user, setuser]=useState("")
  const [emailUser, setemail]=useState("")
  const [submittedData, setSubmittedData] = useState(null);
  
  const taxes= "7%"
  
  

  let purchasedItems = [];
  let subtotal=0
  subtotal.toFixed(2)

 shoppingCartList.map((item, index) => {
 products.map((product, productindex) => {
     if (item.id === product.id) {
       purchasedItems = [...purchasedItems, { productitem: product, productQuantity: item.quantity}];
     }
   });
 });

 purchasedItems.forEach((purchaseItem)=>(
  subtotal+=(purchaseItem.productQuantity)*(purchaseItem.productitem.price)
))

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = {
    user,
    email
  };

  setSubmittedData(formData);
};

  return (
    <div className='sidebaritems'>
      <div className="shoppingcartTable">
        <h2 className='shoppingTitle'>Shopping Cart </h2>
         <table className='itemTable'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>cost</th>
          </tr>
        </thead>
        <tbody>
        {purchasedItems.map((purchaseItem, rowIndex)=>(
          <tr>
            <td>{purchasedItems[rowIndex].productitem.name}</td>
            <td>{purchasedItems[rowIndex].productQuantity}</td>
            <td>{purchasedItems[rowIndex].productitem.price}</td>
            <td>{((purchasedItems[rowIndex].productQuantity)*(purchasedItems[rowIndex].productitem.price)).toFixed(2)}</td>
          </tr>

        ))}           
        </tbody>
        </table> 
      <div className="purchaseCalculation">
        <div className='subtotal'>
        <h4>subtotal </h4>
        <h4>{subtotal.toFixed(2)}</h4>
        </div>
        <div className='taxesFees'>
        <h4>Taxes </h4>
        <h4>{((subtotal*0.07).toFixed(2))}</h4>
       </div>
        <div className='totalFee'>
        <h4>Total </h4>
        <h4>{(subtotal*1.07).toFixed(2)}</h4>
        </div>
       </div>
      </div>


      {/* Payement info and receipt section */}

        <div className="payementInfo">

          <h2 className='payementTitle'>Payment Info</h2>
          
          <form>
            <div className="userInput">
              <label>Name of User</label>
          <input 
          id="user"
          type= "text"
          value={user}
          onChange={(event)=>setuser(event.target.value)}
          placeholder="Student Name"
          required
           />
           </div>
           <div className="emailInput">
              <label>Name of User</label>
          <input 
          id="email"
          type= "email"
          value={emailUser}
          onChange={(event)=>setemail(event.target.value)}
          placeholder="Student email"
          required
           />
           </div>

           <button className="submitbutton" onClick={handleSubmit} type ="submit">Submit</button>
           </form>
           {(submittedData && purchasedItems.length>0)? (
            <div className="Checkout">
              <h2>Checkout Info</h2>
              <h3>Receipt</h3>
              <p>Showing receipt for {user} available at {emailUser}:</p>
              {purchasedItems.map((purchaseItem, rowIndex)=>(
               <li> {purchasedItems[rowIndex].productQuantity} total {purchasedItems[rowIndex].productitem.name} at a cost of ${purchasedItems[rowIndex].productitem.price} for a total cost of 
               ${((purchasedItems[rowIndex].productQuantity)*(purchasedItems[rowIndex].productitem.price)).toFixed(2)}</li> 
         ))}
              <li> Before taxes, the subtotal was {subtotal}</li>
              <li> After taxes and fees were applied, the total comes out to ${(subtotal*1.07).toFixed(2)}</li>
             </div> 
             
            
           ):
           (
              <p></p>
           )}

        </div>
      </div>
  
  )
}

export default ShoppingCart;
