import React, { useEffect, useId } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { getAllOrders, getOrders } from "../../redux/Orders/OrderSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Profile = () => {
  const steps: string[] = ["Verificacion", "Bodega", "Despacho", "Entrega"];
  const orders = useAppSelector(getOrders);
  console.log("ema", orders);


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);


  return (
    <>
      <div className="text-center border-gray-400">
        <h1 className="text-black text-3xl">Mis Ordenes</h1>
      </div>

      <div className="w-[100vw] h-full pt-[100px] flex ">
        <div className="flex flex-col items-start p-10 space-y-7 border-2 border-gray-400">
          <button className=" bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Mis Ordenes
          </button>
          <button className="w-full bg-yellow-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">
            Configuración
          </button>
        </div>
        <div className="flex flex-col items-start p-10 space-y-7 border-2 border-gray-400 w-full">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="flex w-full border items-center"
            >
              <div className="flex-1 p-4 w-full">
                <div>
                  <span className="mr-2">Order N°: {order.orderId}</span>
                </div>
                <div>
                  <span className="mr-2">
                    Tipo de Pago: {order.payment_type}
                  </span>
                </div>
                <div>
                  <span className="mr-2">Total: ${order.total}</span>
                </div>
              </div>
              <Stepper
                activeStep={steps.indexOf(order.status)}
                alternativeLabel
                className="flex-1"
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;