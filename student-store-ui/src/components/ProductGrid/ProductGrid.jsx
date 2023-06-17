import React, { useState } from "react";
import ProductCards from "../productCard/ProductCards";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  const productsresult = props.products;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(productsresult);

  const[categoryData, setCategoryData]=useState(productsresult)
  
  
  
  const handleClick=(event)=> {
    event.preventDefault();
    setCategoryData(event.target.value)

   if (event.target.value ==="allcategories" ){
    setFilteredData(productsresult)
   }else{

    let filteredProducts = productsresult.filter((item) =>
        item.category.toLowerCase().includes(event.target.value))   
   
    filteredProducts = filteredProducts.filter((searchItem)=> 
     searchItem.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
    setFilteredData(filteredProducts)
   }
  }

  const handleSearch = (event) => {
    event.preventDefault();
    
    
    setSearchTerm(event.target.value.toLowerCase());
    setCategoryData

    if (event.target.value.toLowerCase() === "") {
      setFilteredData(productsresult);
    
    } else {
      const filteredProducts = productsresult.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase()
        )
      );
      setFilteredData(filteredProducts);
    }
  };

  return (
    <div className="gridSearch">
      <div className="itemsearch">
        <input
          id="searchInput"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Enter Item Name"
        />
      </div>



      <div className="category">
        <ul className="catagoryButtons">
          <button className="catagorybtn" onClick={ (event) =>{ handleClick(event)}} value= "allcategories">All Categories</button>
          <button className="catagorybtn"  onClick={ (event) =>{ handleClick(event)}}  value="clothing">Clothing</button>
          <button className="catagorybtn"  onClick={ (event) =>{ handleClick(event)} } value="food">Food</button>
          <button className="catagorybtn" onClick={ (event) =>{ handleClick(event)} } value="accessories">Accessories</button>
          <button className="catagorybtn" onClick={ (event) =>{ handleClick(event)} } value="tech">Tech</button>
        </ul>
      </div>






      <div className="productGrid">
        {  filteredData.length !== 0?
            
            filteredData.map((productItem, index) => (
              <ProductCards key={index} product={productItem} />
            ))
        : productsresult.map((productItem, index) => (
            <ProductCards key={index} product={productItem} />))}
      </div>
    </div>
  );
}
