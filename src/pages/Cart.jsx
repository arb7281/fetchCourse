import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect } from "react";

const Cart = () => {

  const {cart} = useSelector((state) => state)

  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price,0))
  },[cart])

  return (<div className="max-w-6xl mx-auto mt-11">
    {
      cart.length > 0 ? 
      (<div className="flex justify-evenly">
          <div className="flex flex-col gap-11 max-w-[65%]">
            {
              cart.map((item,index) => {
                return <CartItem key = {item.id} item={item} itemIndex={index}/>
              })
            }
          </div>

          <div className="flex flex-col w-[40%] pl-11 max-h-[80vh] justify-between sticky top-11">
            <div>
              <div className="text-green-800 font-semibold uppercase">Your Cart</div>
              <div className="text-green-600 font-extrabold uppercase text-[30px]">Summary</div>
              <p>
                <span className="font-semibold mt-5">Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount: <span className="font-semibold">${totalAmount}</span></p>
              <button className="w-full py-3 bg-green-600 rounded-md">Checkout Now</button>
            </div>
          </div>
     </div>) :
      (<div className="flex flex-col items-center justify-center h-[100vh] gap-3">
        <h1 className="text-black-800 font-semibold uppercase">Cart is empty</h1>
        <Link to="/">
          <button className="w-[300px] py-3 bg-green-600 rounded-md text-white">Shop Now</button>
        </Link>
      </div>)
    }
  </div>

  );
};

export default Cart;
