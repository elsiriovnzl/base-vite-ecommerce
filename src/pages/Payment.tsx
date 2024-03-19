import React from "react";

import { FaCcPaypal, FaCreditCard } from "react-icons/fa";

const Payment = () => {
  return (
    <div
      className=" w-full h-full overflow-y-auto  flex items-center justify-center
    p-4"
    >
      <div className="flex w-[70%] h-full items-center  ">
        <div className="flex h-full w-full flex-col p-2 gap-2  overflow-y-auto">
          <div className="flex  h-[150px] w-full  justify-between p-2 items-center shadow-xl">
            <div className="flex w-[200px] h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAw7JZPeTwQ8uhHsDugDSpyMRBUVkx8Vs7ZA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="flex flex-1 h-full justify-between items-center w-full p-3">
              <span>titulo</span>
              <b className="text-3xl">200$</b>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full  shadow-md flex-col  items-center justify-center">
          <div className="flex  h-[200px] w-full items-center justify-center ">
            1 --------------------- 2 ------------------------------3
          </div>
          <div className="flex  h-full w-full items-center  justify-evenly ">
            <span className="flex flex-col items-center justify-center  h-64 w-64 rounded-lg border-yellow-700 border  text-xl">
              <FaCreditCard size={80} />
              Credito
            </span>
            <span className="flex flex-col items-center justify-center  h-64 w-64 rounded-lg border-yellow-700 border text-xl">
              <FaCcPaypal size={80} />
              Pago Unico
            </span>
          </div>
          <div className="flex  flex-col  h-[200px] w-full items-center p-4 gap-3">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="politicas" className="w-7 h-5" />
              <label htmlFor="politicas" id="politicas">
                Aceptas comprar en nuestra plataforma despues de haber leido los
                terminos de pago, en caso de que no pulsa aqui,
                <a href="#" className="text-blue-900  decoration-clone">
                  {" "}
                  Politicas de Compra
                </a>
              </label>
            </div>
            <button className="p-3 rounded-md bg-slate-600 text-white w-44">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
