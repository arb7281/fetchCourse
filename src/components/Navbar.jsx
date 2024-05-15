import React from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (<div>
    <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5">
        <img src="https://download.logo.wine/logo/O_Shopping/O_Shopping-Logo.wine.png" className="h-[8rem]"/>
        </div>
      </NavLink> 
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/cart">
        <div className="relative">
        <FiShoppingCart className="text-2xl"/>
        {
          cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
        }
        
        </div> 
      </NavLink> 
        
      </div>
    </nav>
  </div>

  );
};

export default Navbar;
