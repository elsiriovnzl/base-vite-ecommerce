import React, { useEffect } from "react";

import HorizontalLinearStepper from "../components/GenericStep";
import { cart } from "../redux/Products/CartSlice";
import { useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const Cart = useAppSelector(cart);
  const router = useNavigate();
  useEffect(() => {
    !Cart.length && router("/");
  }, [Cart]);

  return (
    <div
      className=" w-full h-full overflow-y-auto pt-[150px] flex items-center justify-center
    p-4"
    >
      <div className="flex w-[70%] h-full items-center">
        <div className="flex h-full w-full flex-col p-2 gap-2  overflow-y-auto">
          {Cart?.map((cart) => (
            <div
              key={cart.products_id}
              className="flex  h-[150px] w-full  justify-between p-2 items-center shadow-xl"
            >
              <div className="flex w-[200px] h-full">
                <img src={cart.products_img1} alt="" />
              </div>
              <div className="flex flex-col flex-1 h-full justify-between items-center w-full p-3 bg-slate-500/30 rounded-xl">
                <span>{cart.products_tiltle}</span>
                <b className="text-3xl">{cart.products_total}$</b>
                <span>Cantidad: {cart.quantity}</span>
              </div>
            </div>
          ))}
        </div>
        <HorizontalLinearStepper />
      </div>
    </div>
  );
};

export default Payment;
