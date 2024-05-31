import React, { useEffect } from "react";

import HorizontalLinearStepper from "./components/GenericStep";
import { cart } from "../../redux/Products/CartSlice";
import { useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { token } from "../../redux/Products/Auth/AuthSlice";
import { URL_HOST_PROD } from "../../lib/utils";

const Payment = () => {
  const Cart = useAppSelector(cart);
  const router = useNavigate();
  const istoken = useAppSelector(token);
  useEffect(() => {
    !Cart.length && router("/");
    if(!istoken) {
      toast.warning('Favor inicia de session para realizar el pedido')
      router("/Inicio");
    } 

  }, [Cart, istoken]);

  return (
    <div
      className=" w-full h-full overflow-y-auto  flex items-center justify-center
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
                <img src={`${URL_HOST_PROD}/uploads/${cart?.image}`} alt="" />
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
