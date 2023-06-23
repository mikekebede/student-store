import React from "react"
import "./Sidebar.css"
import {useState} from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import { GiHamburgerMenu } from 'react-icons/gi';

import { FiShoppingCart } from 'react-icons/fi';
import { FaMoneyCheck } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';





export default function Sidebar() {
  
  const [sidebarOpen, setSidebar]= useState(true);  
  const handleSidebar=()=>setSidebar(!sidebarOpen)
  
  
  
  return (
    
    <div className={sidebarOpen? "sidebarOpen": "sidebarClosed"}>
    <button className="sidebarToggler" onClick={handleSidebar}><GiHamburgerMenu /></button>
    {sidebarOpen ? (
      
      <div className="closed">
        <div className="closedButtons">
        <button className="iconButton" onClick={handleSidebar}><FiShoppingCart id="fishop" /></button>

        <button className="iconButton" onClick={handleSidebar}><FaMoneyCheck /></button>
       
        <button className="iconButton" onClick={handleSidebar}><IoIosPaper /></button>

        </div>
      </div>
    ) : (
      
      <div>
        <ShoppingCart/>
      </div>
    )}
  </div>
  )
    }