import React, { useEffect } from "react";
import { CgTrash } from "react-icons/cg";
import {
  addOne,
  cart,
  decrementOne,
  deleteOne,
  getProductsInCart,
} from "../redux/Products/CartSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";

type Props = {};

const SliderCart = ({}: Props) => {
  const dispatch = useAppDispatch();
  const Cart = useAppSelector(cart);
  const router = useNavigate();

  const totalProductInCart = Cart.reduce(
    (acc, obj) => acc + obj.products_total * (obj?.quantity ?? 0),
    0
  );


  return (
    <div
      className={`absolute  select-none flex items-center justify-center top-0 right-0  h-full w-[200px] z-10 `}
    >
      <div className=" h-full w-full p-6 bg-white border-l-2 flex flex-col border-gray-500 gap-3 overflow-hidden overflow-y-auto">
        <div className="flex flex-col w-full items-center justify-center gap-3 ">
          <span className="text-bold text-sm text-black">Sub Total</span>
          <b className="text-bold text-xl text-black">${totalProductInCart}</b>
          <button
            className="border-2 p-3 rounded-lg "
            onClick={() => router("/Pago")}
          >
            Ir al carrito
          </button>
          <hr className="h-1 w-full bg-gray-300" />
        </div>
        {Cart?.map((p) => (
          <div
            key={p.products_id}
            className=" w-full h-[200px] justify-center items-center flex flex-col  shadow-xl gap-5 p-4"
          >
            <img
              src={p.products_img1}
              alt=""
              className="w-[200px] h-[100px] object-contain"
            />
            <div className="text-sm">
              <b>USD {p.products_total}</b>
            </div>
            <div className="flex w-full justify-around items-center">
              <div className="flex gap-3">
                <span
                  className="bg-gray-200 w-4 h-4  flex items-center justify-center rounded-full cursor-pointer"
                  onClick={() => dispatch(addOne(p.products_id))}
                >
                  +
                </span>
                <div className="">{p.quantity}</div>
                <span
                  onClick={() => dispatch(decrementOne(p.products_id))}
                  className="bg-gray-200 w-4 h-4  flex items-center justify-center rounded-full cursor-pointer "
                >
                  -
                </span>
              </div>
              <CgTrash
                size={25}
                cursor={"pointer"}
                onClick={() => dispatch(deleteOne(p.products_id))}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderCart;
