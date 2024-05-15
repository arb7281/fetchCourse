import React from "react";
import { MdDelete } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item removed succesfully");
  }

  return (
    <div>
      <div className="flex gap-12 border-b-2 border-black pb-11">
        <div className="h-[180px] w-[180px]">
          <img src={item.image} className="object-contain w-full h-full"/>
        </div>
        <div className="flex flex-col gap-5 w-[60%] ">
          <h1>{item.title}</h1>
          <h1>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex justify-between items-center mt-6">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart}>
              <MdDelete className="text-3xl cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
