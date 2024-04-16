import React, { Dispatch, SetStateAction, useId, useState } from "react";
import { FormControl } from "@mui/material";
import { FaBlenderPhone } from "react-icons/fa";
import { OrderType, Quotes } from "./Types";
import { ProductsProps } from "../../../pages/Home";
import axios from "axios";

interface Props {
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  Cart?: ProductsProps[];
  data: OrderType;
  setQuotes: Dispatch<SetStateAction<number>>;
  quotes: number;
  setBankCode: Dispatch<SetStateAction<string>>;
}

type ResponseBank = { code: number; message: string };

const StepTwo = ({
  handleChange,
  Cart,
  data,
  setQuotes,
  setBankCode,
}: Props) => {
  const [methodPay, setMethodPay] = useState<string | null>(null);
  const [responseBank, setResponseBank] = useState<ResponseBank | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const quotes: Quotes[] = [
    { id: useId(), value: 3 },
    { id: useId(), value: 6 },
    { id: useId(), value: 12 },
    { id: useId(), value: 24 },
    { id: useId(), value: 32 },
  ];

  const bankCode = [
    { id: useId(), code: "0102", bank: "Banco de Venezuela, S.A.C.A." },
    { id: useId(), code: "0104", bank: "Venezolano de Crédito" },
    { id: useId(), code: "0105", bank: "Mercantil" },
    { id: useId(), code: "0108", bank: "Provincial" },
    { id: useId(), code: "0114", bank: "Bancaribe" },
    { id: useId(), code: "0115", bank: "Exterior" },
    { id: useId(), code: "0116", bank: "Occidental de Descuento" },
    { id: useId(), code: "0128", bank: "Banco Caroní" },
    { id: useId(), code: "0134", bank: "Banesco" },
    { id: useId(), code: "0138", bank: "Banco Plaza" },
    { id: useId(), code: "0151", bank: "BFC Banco Fondo Común" },
    { id: useId(), code: "0156", bank: "100% Banco" },
    { id: useId(), code: "0157", bank: "Del Sur" },
    { id: useId(), code: "0163", bank: "Banco del Tesoro" },
    { id: useId(), code: "0166", bank: "Banco Agrícola de Venezuela" },
    { id: useId(), code: "0168", bank: "Bancrecer" },
    { id: useId(), code: "0169", bank: "Mi Banco" },
    { id: useId(), code: "0171", bank: "Banco Activo" },
    { id: useId(), code: "0172", bank: "Bancamiga" },
    { id: useId(), code: "0174", bank: "Banplus" },
    { id: useId(), code: "0175", bank: "Bicentenario del Pueblo" },
    { id: useId(), code: "0177", bank: "Banfanb" },
    { id: useId(), code: "0191", bank: "BNC Nacional de Crédito" },
  ];
  const total = Cart?.reduce(
    (acc, obj) => acc + obj.products_total * (obj?.quantity ?? 0),
    0
  );

  const convert = total && total * 36.17;
  const divideQuotes = convert && convert / data?.quotes;

  const apiBank = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:3000/api/v1/payment/mobile", data)
      .then((response) => {
        console.log("Respuesta:", response.data);
        setResponseBank(response.data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error.message);
      });
    setLoading(false);
  };

  return (
    <div className="h-full w-full flex gap-5 flex-col ">
      <div
        className={`flex h-full w-full items-center gap-6 p-6
        ${methodPay ? "hidden" : ""}`}
      >
        <p className="self-start text-2xl">Opciones de pago</p>
        <div className="flex  h-48  w-48 l items-center ">
          <div
            className="flex flex-col items-center justify-center h-48 w-48 border-black border rounded-3xl hover:bg-black hover:text-white cursor-pointer "
            onClick={() => setMethodPay("movil")}
          >
            <FaBlenderPhone size={40} />
            <p>Pago Movil</p>
          </div>
        </div>
      </div>

      {methodPay && (
        <FormControl variant="filled" className="flex gap-5 w-full h-full m-3 ">
          <div className="flex w-full h-full items-center flex-wrap gap-3  p-2">
            <div className="flex flex-col">
              <label htmlFor="">Nombre</label>
              <input
                id="filled-start-adornment"
                name="name"
                className="bg-gray-200 h-[50px] "
                style={{ width: 300, borderBottom: "1px solid black" }}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">CI</label>
              <input
                id="filled-start-adornment"
                name="cedulaPagador"
                className="bg-gray-200 h-[50px] "
                style={{ width: 300, borderBottom: "1px solid black" }}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Dirreción</label>
              <input
                id="filled-start-adornment"
                name="address"
                className="bg-gray-200 h-[50px] "
                style={{ width: 300, borderBottom: "1px solid black" }}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Telefono</label>
              <input
                id="filled-start-adornment"
                name="telefonoPagador"
                className="bg-gray-200 h-[50px] "
                style={{ width: 300, borderBottom: "1px solid black" }}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Referencia</label>
              <input
                id="filled-start-adornment"
                name="referencia"
                className="bg-gray-200 h-[50px] "
                style={{ width: 300, borderBottom: "1px solid black" }}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="quotes" className="text-center">
                Cuotas
              </label>
              <select
                name="quotes"
                id="quotes"
                className="w-48 h-7 border border-gray-300 rounded-md"
                onChange={handleChange}
              >
                {quotes?.map((q) => (
                  <option
                    key={q.id}
                    value={q.value}
                    onClick={() => setQuotes(q.value)}
                  >
                    {q.value}
                  </option>
                ))}
              </select>
              <div className="w-full">
                <input type="date" name="fechaPago" className="w-full h-7 border border-gray-300 rounded-md" onChange={handleChange} />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="quotes" className="text-center">
                Banco Origen
              </label>
              <select
                name="bancoOrigen"
                id="bancoOrigen"
                className="w-[600px] h-7 border border-gray-300 rounded-md"
                onChange={handleChange}
              >
                {bankCode?.map((q) => (
                  <option
                    key={q.id}
                    value={q.code}
                    onClick={() => setBankCode(q?.code)}
                  >
                    {q.bank}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full h-44 flex  gap-4 items-center bg-slate-300 rounded-md ">
            <div className="gap-2 flex flex-col w-full items-center">
              <span className="font-bold text-2xl ">Datos</span>
              <span>MOVIL EMPRISE SPA </span>
            </div>
            <div className="gap-2 flex flex-col w-full items-center">
              <span className="font-bold text-2xl ">Rif</span>
              <span className="text-xl">v-262964892</span>
            </div>
            <div className="">
              <span className="font-bold text-2xl w-full items-center">
                Banco Santander
              </span>
            </div>
            <div className="gap-2 flex flex-col w-full items-center">
              <span className="font-bold text-2xl">N° Cel</span>
              <span className="text-xl">414-825561855</span>
            </div>
          </div>
          <div className="flex justify-between w-full gap-3 items-center">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <button
                className="border rounded-xl w-52 h-24 border-green-500 font-bold hover:bg-green-400 hover:text-white"
                onClick={apiBank}
              >
                Verificar pago
              </button>
            )}

            {responseBank?.message && (
              <p
                className={` font-bold ${
                  responseBank?.code === 1010
                    ? `text-red-500 `
                    : "text-green-500"
                }`}
              >
                {responseBank?.message}
              </p>
            )}
          </div>
        </FormControl>
      )}

      <div className="h-auto w-full  flex  gap-5 items-center shadow-md rounded-xl justify-center bg-gray-200">
        <div className="flex flex-col">
          <p className=" font-bold text-2xl"> Total USD: {total} </p>
          <p className=" font-bold text-2xl">Total VEF: {convert} </p>
        </div>
        <hr className="bg-black w-[0.1px] rounded-xl h-12" />
        <div className="flex flex-col">
          <p className=" font-bold text-2xl"> Cuotas: {data?.quotes} </p>
          <p className=" font-bold text-2Dxl">
            {" "}
            Total a pagar VEF: {divideQuotes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
