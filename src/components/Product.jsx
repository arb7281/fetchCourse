import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";


const Product = ({post}) => {
  // console.log("printing post in Product")
  // console.log(post)
  const {title, description, image, price, id} = post;
  console.log("printing title")
  console.log(title)

  const {cart} = useSelector((state) => state)

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added succesfully");
  }

  const removeFromCart = () => {
    dispatch(remove(id));
    toast.error("Item remove from cart");
  }

  return (<div className="flex flex-col items-center justify-between shadow-lg hover:scale-110 transition duration-300 ease-in hover:shadow-[0px_11px_13px_18px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl">
    <div >
      <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{title.substring(0, 17)}</p>
    </div>
    <div className="w-40 text-gray-400 font-normal text-[12px] text-left">
      <p>{description.split(" ").slice(0,10).join(" ") + "..."}</p>
    </div>
    <div className="h-[180px]">
      <img src={image} className="h-full w-full"/>
    </div>

    <div className="flex justify-between gap-12 items-center w-full mt-5">
      <div> 
        <p className="text-green-600 font-semibold">${price}</p>
      </div>
      <div>
        {
          cart.some((p) => p.id == id) ? (<button onClick={removeFromCart} 
          className="text-gray-700 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white border-2 transition duration-300 ease-in">Remove item</button>) : 
          (<button onClick={addToCart} className="text-gray-700 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white border-2 transition duration-300 ease-in">Add to cart</button>)
        }
      </div>
    </div>
    
  </div>)
};

export default Product;
