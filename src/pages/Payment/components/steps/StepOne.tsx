import React, { FC, useEffect } from "react";
import { ProductsProps } from "../../../pages/Home/Home";
import { FaCreditCard } from "react-icons/fa";
import { FormData } from "./Types";


type Props = {
  handleCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickButton?: (type: string) => void;
  data?: FormData;
  cart?: ProductsProps[];
};

function StepOne({ handleCheckboxChange, handleClickButton, data }: Props) {
  return (
    <div className="flex h-full w-full  shadow-md flex-col  items-center justify-center">
      <div className="flex  h-full w-full items-center  justify-evenly ">
        <button
          name="credit"
          onClick={() => handleClickButton && handleClickButton("credit")}
          className={`flex flex-col items-center justify-center  h-64 w-64 rounded-lg ${
            data?.credit && data?.credit ? "bg-slate-600 text-white" : ""
          } border-yellow-700 border text-xl hover:bg-slate-600
               hover:text-white cursor-pointer`}
        >
          <FaCreditCard size={80} />
          Credito
        </button>
      </div>
      <div className="flex  flex-col  h-[200px] w-full items-center p-4 gap-3">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="politicas"
            className="w-7 h-5"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="politicas" id="politicas">
            Aceptas comprar en nuestra plataforma despues de haber leido los
            terminos de pago, en caso de que no pulsa aqui,
            <a href="#" className="text-blue-900  decoration-clone">
              Politicas de Compra
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
